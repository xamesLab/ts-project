import React, { ReactElement } from "react";
import styled from "styled-components";
import LoginForm from "../components/auth/LoginForm";
import LogOut from "../components/auth/LogOut";
import RegisterForm from "../components/auth/RegisterForm";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { toggleModal } from "../store/action-creators/modalActions";
import { baseTheme } from "../styles/theme";
import "./modal.scss";

const ModalTitle = styled.h2`
    color: ${baseTheme.colors.primary};
`;

const Modal: React.FC = () => {
    const { modal, modalContent } = useTypedSelector((state) => state.modalReducer);
    const dispatch = useAppDispatch();

    const handler = () => {
        dispatch(toggleModal());
    };

    //TODO: to switch/case, add ENUM for constants
    let formContent: ReactElement = <></>;
    if (modalContent === "Login") formContent = <LoginForm />;
    if (modalContent === "Registration") formContent = <RegisterForm />;
    if (modalContent === "Logout") formContent = <LogOut />;

    return (
        <main className={`${modal ? "modal" : "modal_hide"}`} onClick={handler}>
            <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
                <div className="modal__title">
                    <ModalTitle>{modalContent}</ModalTitle>
                </div>
                <div className="modal__content">{formContent}</div>
            </div>
        </main>
    );
};

export default Modal;

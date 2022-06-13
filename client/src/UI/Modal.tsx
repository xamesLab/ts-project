import React, { ReactElement } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { toggleModal } from "../store/action-creators/modalActions";
import "./modal.css";

interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
    const { modal, modalContent } = useTypedSelector((state) => state.modalReducer);
    const dispatch = useAppDispatch();

    const handler = () => {
        dispatch(toggleModal());
    };

    let formContent: ReactElement = <></>;
    if (modalContent === "Login") formContent = <LoginForm />;
    if (modalContent === "Registration") formContent = <RegisterForm />;

    return (
        <main className={`${modal ? "modal" : "modal_hide"}`} onClick={handler}>
            <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
                <div className="modal__title">
                    <h2>{modalContent}</h2>
                </div>
                <div className="modal__content">{formContent}</div>
            </div>
        </main>
    );
};

export default Modal;

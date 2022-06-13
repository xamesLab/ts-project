import React from "react";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { toggleModal } from "../store/action-creators/modalActions";
import "./modal.css";

interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
    const { modal } = useTypedSelector((state) => state.modalReducer);
    const dispatch = useAppDispatch();

    const handler = () => {
        dispatch(toggleModal());
    };
    return (
        <main className={`${modal ? "modal" : "modal_hide"}`} onClick={handler}>
            <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
                <div className="modal__title">
                    <h2>Title</h2>
                </div>
                <div className="modal__content">{props.children}</div>
            </div>
        </main>
    );
};

export default Modal;

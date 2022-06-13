import { IModalAction, ModalActionTypes } from "../../types/modal";

interface IModalState {
    modal: boolean;
    modalContent?: string;
}

const modalState: IModalState = {
    modal: true,
    modalContent: "Login",
};

export const modalReducer = (state = modalState, actions: IModalAction): IModalState => {
    switch (actions.type) {
        case ModalActionTypes.TOGGLE_MODAL:
            return { ...state, modal: !state.modal };
        case ModalActionTypes.SET_CONTENT:
            return { modal: !state.modal, modalContent: actions.content };
        default:
            return state;
    }
};

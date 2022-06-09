import { IModalAction, ModalActionTypes } from "../../types/modal";

const modalState: { modal: boolean } = {
    modal: true,
};

export const modalReducer = (state = modalState, actions: IModalAction): { modal: boolean } => {
    switch (actions.type) {
        case ModalActionTypes.TOGGLE_MODAL:
            return { modal: !state.modal };
        default:
            return state;
    }
};

import { Dispatch } from "redux";
import { IModalAction, ModalActionTypes } from "../../types/modal";

export const toggleModal = () => {
    return async (dispatch: Dispatch<IModalAction>) => {
        try {
            dispatch({ type: ModalActionTypes.TOGGLE_MODAL });
        } catch (error) {
            console.log(error);
        }
    };
};

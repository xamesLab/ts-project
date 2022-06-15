import { AppDispatch } from "..";
import { modalSlice } from "../reducers/modalReducer";

export const toggleModal = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(modalSlice.actions.toggleModal());
    } catch (error) {
        console.log(error);
    }
};

export const setModalContent = (content: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(modalSlice.actions.setContent(content));
    } catch (error) {
        console.log(error);
    }
};

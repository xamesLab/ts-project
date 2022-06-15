import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalState {
    modal: boolean;
    modalContent?: string;
}

const modalState: IModalState = {
    modal: false,
    modalContent: "Login",
};

export const modalSlice = createSlice({
    name: "modal",
    initialState: modalState,
    reducers: {
        toggleModal(state) {
            state.modal = !state.modal;
        },
        setContent(state, action: PayloadAction<string>) {
            state.modalContent = action.payload;
        },
    },
});

export const modalReducer = modalSlice.reducer;

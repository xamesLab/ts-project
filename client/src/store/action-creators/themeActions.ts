import { AppDispatch } from "..";
import { themeSlice } from "../reducers/themeReducers";

export const toggleTheme = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(themeSlice.actions.toggleTheme());
    } catch (error) {
        console.log(error);
    }
};

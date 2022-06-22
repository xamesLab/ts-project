import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum } from "../../types/styled";

interface IThemeState {
    theme: string;
}

const themeState: IThemeState = {
    theme: 'theme--default',
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: themeState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === ThemeEnum.light ? 'theme--dark' : 'theme--default';
        },
    },
});

export const themeReducer = themeSlice.reducer;

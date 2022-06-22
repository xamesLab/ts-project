import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ThemeEnum } from "../../types/styled";

interface IThemeState {
    theme: DefaultTheme;
}

const themeState: IThemeState = {
    theme: lightTheme,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: themeState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme.type === ThemeEnum.light ? darkTheme : lightTheme;
        },
    },
});

export const themeReducer = themeSlice.reducer;

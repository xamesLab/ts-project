import { AxiosError } from "axios";
import { AppDispatch } from "..";
import profileService from "../../service/profileService";
import { IProfileItemProp } from "../../types/users";
import { profileSlice } from "../reducers/userReducer";

export const getProfile = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(profileSlice.actions.getProfile());
        const response = await profileService.getProfile();
        dispatch(profileSlice.actions.getProfileSuccess(response.data.profile[0]));
    } catch (error) {
        if ((error as AxiosError)?.response?.status === 403) {
            profileService.createProfile();
        }
        dispatch(profileSlice.actions.getProfileError("error"));
    }
};

export const updateProfile = (data: IProfileItemProp) => async (dispatch: AppDispatch) => {
    try {
        dispatch(profileSlice.actions.updateProfile());
        const response = await profileService.updateProfile(data);
        dispatch(profileSlice.actions.updateProfileSuccess(response.data.newProfile));
    } catch (error) {
        dispatch(profileSlice.actions.updateProfileError("error"));
    }
};

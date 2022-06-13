export enum ModalActionTypes {
    TOGGLE_MODAL = "TOGGL_MODAL",
    SET_CONTENT = "SET_CONTENT",
}

export interface IModalAction {
    type: ModalActionTypes.TOGGLE_MODAL | ModalActionTypes.SET_CONTENT;
    content?: string;
}

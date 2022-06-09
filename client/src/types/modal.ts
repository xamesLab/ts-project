export enum ModalActionTypes {
    TOGGLE_MODAL = "TOGGL_MODAL",
}

export interface IModalAction {
    type: ModalActionTypes.TOGGLE_MODAL;
}

import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

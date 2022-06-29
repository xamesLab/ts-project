import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import { useAppDispatch, useTypedSelector } from "./hooks/useTypedSelector";
import Modal from "./UI/Modal";
import MainProfile from "./components/profile/MainProfile";
import MainAdmin from "./components/admin/MainAdmin";
import { validateToken } from "./store/action-creators/userActions";
import { getProfile } from "./store/action-creators/profileActions";

function Main() {
    const dispatch = useAppDispatch();
    const { theme } = useTypedSelector((state) => state.themeReducer);
    const { isAuth } = useTypedSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(validateToken());
        if (isAuth) {
            dispatch(getProfile());
        }
    }, [dispatch, isAuth]);
    //const { loading } = useTypedSelector((state) => state.userReducer);

    // const handler = () => {
    //     //dispatch(getUsers());
    // };
    // const handler2 = () => {
    //     //userService.test();
    // };

    // // const handler2 = (e: React.MouseEvent<EventTarget>) => {
    // //     let target = e.target as HTMLInputElement;
    // //     console.log(target.dataset.t);
    // //     console.log(target.textContent);
    // // };

    return (
        <main className={`${theme}`}>
            <div className="base">
                <Modal />
                <MainHeader />
                <Routes>
                    <Route path="/manager" element={<MainAdmin />} />
                    <Route path="/" element={<></>} />
                    <Route path="/profile" element={<MainProfile />} />
                </Routes>
            </div>
        </main>
    );
}

export default Main;

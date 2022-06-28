import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import { useAppDispatch, useTypedSelector } from "./hooks/useTypedSelector";
import Modal from "./UI/Modal";
import MainProfile from "./components/profile/MainProfile";
import MainAdmin from "./components/admin/MainAdmin";
import userService from "./service/userService";
import { validateToken } from "./store/action-creators/userActions";

function Main() {
    const dispatch = useAppDispatch();
    const { theme } = useTypedSelector((state) => state.themeReducer);
    const { user } = useTypedSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(validateToken());
    }, []);
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
                test {user.username}
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

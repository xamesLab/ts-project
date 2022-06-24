import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Modal from "./UI/Modal";
import { Loader } from "./styles/components";
import MainProfile from "./components/profile/MainProfile";

function Main() {
    const { theme } = useTypedSelector((state) => state.themeReducer);
    const { loading } = useTypedSelector((state) => state.userReducer);

    const handler = () => {
        //dispatch(getUsers());
    };
    const handler2 = () => {
        //userService.test();
    };

    // const handler2 = (e: React.MouseEvent<EventTarget>) => {
    //     let target = e.target as HTMLInputElement;
    //     console.log(target.dataset.t);
    //     console.log(target.textContent);
    // };

    return (
        <main className={`${theme}`}>
            <div className="base">
                <Modal />
                <MainHeader />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/profile" element={<MainProfile />} />
                </Routes>
            </div>
        </main>
    );
}

export default Main;

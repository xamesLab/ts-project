import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Modal from "./UI/Modal";
import { Loader } from "./styles/components";

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
        <div className={`main ${theme}`}>
            <Modal />
            <MainHeader />
            {loading ? <Loader /> : <></>}
            <button onClick={handler}>test</button>
            <button onClick={handler2}>test-tets</button>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/profile" element={<Loader />} />
            </Routes>
        </div>
    );
}

export default Main;

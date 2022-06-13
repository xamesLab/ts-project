import React from "react";
import MainHeader from "./components/MainHeader";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./Main.css";
import Modal from "./UI/Modal";

function Main() {
    const { loading, user } = useTypedSelector((state) => state.authReducer);
    // const handler = async () => {
    //     //
    // };

    // const handler2 = (e: React.MouseEvent<EventTarget>) => {
    //     let target = e.target as HTMLInputElement;
    //     console.log(target.dataset.t);
    //     console.log(target.textContent);
    // };

    return (
        <div className="">
            <Modal />
            <MainHeader />
            <header className="">{user.username || "user"}</header>
            {loading ? <div>загрузка...</div> : <div></div>}
        </div>
    );
}

export default Main;

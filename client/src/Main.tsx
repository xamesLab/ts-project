import React from "react";
import UserList from "./components/UserList";
import "./Main.css";
import userService from "./service/userService";
import Modal from "./UI/Modal";

function Main() {
    const handler = async () => {
        //console.log(await userService.getAllUsers());
    };
    return (
        <div className="">
            <Modal />
            <header className="">test</header>
            <UserList />
            <button onClick={handler}>Click</button>
        </div>
    );
}

export default Main;

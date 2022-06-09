import React from "react";
import UserList from "./components/UserList";
import "./Main.css";
import userService from "./service/userService";

function Main() {
    const handler = async () => {
        console.log(await userService.getAllUsers());
    };
    return (
        <div className="">
            <header className="">test</header>
            <UserList />
            <button onClick={handler}>Click</button>
        </div>
    );
}

export default Main;

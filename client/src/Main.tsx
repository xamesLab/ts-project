import React from "react";
import UserList from "./components/UserList";
import "./Main.css";

function Main() {
    const handler = async () => {};
    return (
        <div className="">
            <header className="">test</header>
            <UserList />
            <button onClick={handler}>Click</button>
        </div>
    );
}

export default Main;

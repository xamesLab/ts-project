import React from "react";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import MainHeader from "./components/MainHeader";
//import UserList from "./components/UserList";
import "./Main.css";
//import userService from "./service/userService";
import Modal from "./UI/Modal";

function Main() {
    const handler = async () => {
        //console.log(await userService.getAllUsers());
    };

    // const handler2 = (e: React.MouseEvent<EventTarget>) => {
    //     let target = e.target as HTMLInputElement;
    //     console.log(target.dataset.t);
    //     console.log(target.textContent);
    // };

    return (
        <div className="">
            <Modal>
                {/* <RegisterForm /> */}
                {/* <LoginForm /> */}
            </Modal>
            <MainHeader />
            <header className="">test</header>
            {/* <UserList /> */}
            <button onClick={handler}>Click</button>
        </div>
    );
}

export default Main;

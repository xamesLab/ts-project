import React from "react";
import MainHeader from "./components/MainHeader";
import { useAppDispatch, useTypedSelector } from "./hooks/useTypedSelector";
import "./Main.css";
import userService from "./service/userService";
import { getUsers } from "./store/action-creators/userActions";
import Modal from "./UI/Modal";

function Main() {
    const dispatch = useAppDispatch();
    const { users } = useTypedSelector((state) => state.usersReducer);
    const { user, loading, isAuth } = useTypedSelector((state) => state.userReducer);
    const handler = () => {
        dispatch(getUsers());
    };
    const handler2 = () => {
        userService.test();
    };

    // const handler2 = (e: React.MouseEvent<EventTarget>) => {
    //     let target = e.target as HTMLInputElement;
    //     console.log(target.dataset.t);
    //     console.log(target.textContent);
    // };

    return (
        <div className="">
            <Modal />
            <MainHeader />
            {loading ? "loading..." : ""}
            <header className="">
                {user.username || "user"} auth:{isAuth ? "is auth" : "not auth"}
            </header>
            <button onClick={handler}>test</button>
            <button onClick={handler2}>test-tets</button>
            {users.map((user) => (
                <div key={user._id}>{user.username}</div>
            ))}
        </div>
    );
}

export default Main;

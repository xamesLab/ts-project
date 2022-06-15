import React from "react";
import MainHeader from "./components/MainHeader";
import { useAppDispatch, useTypedSelector } from "./hooks/useTypedSelector";
import "./Main.css";
import { getUsers } from "./store/action-creators/userActions";
import Modal from "./UI/Modal";

function Main() {
    const dispatch = useAppDispatch();
    const { users } = useTypedSelector((state) => state.usersReducer);
    const { user, loading } = useTypedSelector((state) => state.userReducer);
    const handler = () => {
        dispatch(getUsers());
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
            <header className="">{user.username || "user"}</header>
            <button onClick={handler}>test</button>
            {users.map((user) => (
                <div key={user._id}>{user.username}</div>
            ))}
        </div>
    );
}

export default Main;

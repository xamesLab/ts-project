import React, { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { getUsers } from "../../store/action-creators/userActions";
import { IUserItem } from "../../types/users";

const MainAdmin = () => {
    const dispatch = useAppDispatch();
    const { users } = useTypedSelector((state) => state.usersReducer);
    const [isUsersActive, setIsUsersActive] = useState(false);

    const toggleUsersStatus = () => {
        setIsUsersActive((i) => !i);
    };

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    let usersList: IUserItem[] = [];

    if (isUsersActive) {
        usersList = users.filter((i) => !!i.active);
    } else {
        usersList = users.filter((i) => !i.active);
    }

    return (
        <main>
            <section className="users-wrap">
                <h2 className="section-title">
                    Users list ({isUsersActive ? "active" : "archive"}){" "}
                    <span style={{ cursor: "pointer", color: "black" }} onClick={toggleUsersStatus}>
                        O
                    </span>
                </h2>
                <div className="users">
                    <ul className="users__list">
                        {usersList.map((i) => (
                            <li key={i._id}>{i.username}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default MainAdmin;

import React, { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { getUsers } from "../../store/action-creators/userActions";
import { IUserItem } from "../../types/users";
import adminService from "../../service/adminService";

const MainAdmin = () => {
    const dispatch = useAppDispatch();
    const { users } = useTypedSelector((state) => state.usersReducer);
    const [isUsersActive, setIsUsersActive] = useState(true);

    const toggleUsersStatus = () => {
        setIsUsersActive((i) => !i);
    };

    const setStatus = async (username: string, active: boolean) => {
        await adminService.setStatus({ username, active });
        dispatch(getUsers());
    };

    const deleteUser = async (username: string) => {
        if (window.confirm("confirm delete")) {
            await adminService.deleteUser({ username });
            dispatch(getUsers());
        }
        return;
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
                            <li key={i._id}>
                                {i.username}{" "}
                                <span
                                    onClick={() => setStatus(i.username, !isUsersActive)}
                                    style={{ cursor: "pointer", color: "black" }}
                                >
                                    {isUsersActive && <strong>to arch</strong>}
                                    {!isUsersActive && <strong>to active</strong>}
                                </span>
                                {!isUsersActive && (
                                    <span onClick={() => deleteUser(i.username)} style={{ cursor: "pointer" }}>
                                        {" "}
                                        DEL
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default MainAdmin;

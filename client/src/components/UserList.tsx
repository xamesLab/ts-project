import React, { useEffect } from "react";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { getUsers } from "../store/action-creators/userActions";

const UserList: React.FC = () => {
    const { loading, error, users } = useTypedSelector((state) => state.usersReducer);
    const dispatch = useAppDispatch();

    console.log(loading, error, users);

    useEffect(() => {
        dispatch(getUsers());
    }, [users]);

    return (
        <div>
            <h2>UserList</h2>
            {loading ? <p>Загрузка...</p> : users.map((i) => <p key={i._id}>{i.username}</p>)}
            {error ? <p>{error}</p> : ""}
        </div>
    );
};

export default UserList;

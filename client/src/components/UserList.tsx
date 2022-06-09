import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
    const state = useTypedSelector((state) => state.userReducer);
    console.log(state);
    return (
        <div>
            <div>UserList</div>
        </div>
    );
};

export default UserList;

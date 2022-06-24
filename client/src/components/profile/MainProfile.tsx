import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./MainProfile.scss";
import ProfileKeys from "./ProfileKeys";
import SetKeys from "./SetKeys";

const MainProfile = () => {
    const { user } = useTypedSelector((state) => state.userReducer);

    return (
        <main className="profile">
            <header className="profile__header">
                <h2>User: {user.user.username}</h2>
            </header>
            <SetKeys />
            <ProfileKeys />
        </main>
    );
};

export default MainProfile;

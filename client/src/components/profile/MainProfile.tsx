import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./MainProfile.scss";
import ProfileKeys from "./ProfileKeys";
import SetKeys from "./SetKeys";

const MainProfile = () => {
    const { user } = useTypedSelector((state) => state.userReducer);
    const [updateMode, setUpdateMode] = useState(true);

    const toggleUpdateMode = () => {
        setUpdateMode((p) => !p);
    };

    return (
        <main className="profile">
            <header className="profile__header">
                <h2>User: {user.username}</h2>
            </header>
            <div className="profile-detail">
                {updateMode ? (
                    <>
                        <p className="profile-detail__item">
                            <span>Name: </span>
                        </p>
                        <p className="profile-detail__item">
                            <span>Email: </span>
                        </p>
                        <p className="profile-detail__item">
                            <span>Public key: </span>
                        </p>
                    </>
                ) : (
                    <>
                        <p className="profile-detail__item">
                            <span>Name: </span>
                            <input type="text" />
                        </p>
                        <p className="profile-detail__item">
                            <span>Email: </span>
                            <input type="text" />
                        </p>
                        <p className="profile-detail__item">
                            <span>Public key: </span>
                            <input type="text" />
                        </p>
                    </>
                )}
                <input type="submit" value={"submit"} onClick={toggleUpdateMode} />
            </div>
            <SetKeys />
            <ProfileKeys />
        </main>
    );
};

export default MainProfile;

import React, { useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import "./MainProfile.scss";
import ProfileKeys from "./ProfileKeys";
import SetKeys from "./SetKeys";
import { updateProfile } from "../../store/action-creators/profileActions";

const MainProfile = () => {
    const dispatch = useAppDispatch();
    const { user } = useTypedSelector((state) => state.userReducer);
    const { profile } = useTypedSelector((state) => state.profileReducer);
    const [updateMode, setUpdateMode] = useState(true);
    const [formValues, setFormValues] = useState({ name: "", email: "", pubkey: "" });

    const update = () => {
        if (formValues.name || formValues.email || formValues.pubkey) {
            dispatch(
                updateProfile({
                    name: formValues.name || undefined,
                    email: formValues.email || undefined,
                    pubkey: formValues.pubkey || undefined,
                })
            );
            setFormValues({ name: "", email: "", pubkey: "" });
        }
        toggleUpdateMode();
    };

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
                            <span>Profile: {profile.name}</span>
                        </p>
                        <p className="profile-detail__item">
                            <span>Email: {profile.email || "-"}</span>
                        </p>
                        <p className="profile-detail__item">
                            <span>Public key: {profile.pubkey || "-"}</span>
                        </p>
                        <input type="submit" value={"change"} onClick={toggleUpdateMode} />
                    </>
                ) : (
                    <form onSubmit={update}>
                        <p className="profile-detail__item">
                            <span>Name: </span>
                            <input
                                type="text"
                                value={formValues.name}
                                onChange={({ target }) => setFormValues((p) => ({ ...p, name: target.value }))}
                                placeholder={profile.name}
                            />
                        </p>
                        <p className="profile-detail__item">
                            <span>Email: </span>
                            <input
                                type="text"
                                value={formValues.email}
                                onChange={({ target }) => setFormValues((p) => ({ ...p, email: target.value }))}
                                placeholder={profile.email}
                            />
                        </p>
                        <p className="profile-detail__item">
                            <span>Public key: </span>
                            <input
                                type="text"
                                value={formValues.pubkey}
                                onChange={({ target }) => setFormValues((p) => ({ ...p, pubkey: target.value }))}
                                placeholder={profile.pubkey}
                            />
                        </p>
                        <input type="submit" value={"submit"} />
                    </form>
                )}
            </div>
            <SetKeys />
            <ProfileKeys />
        </main>
    );
};

export default MainProfile;

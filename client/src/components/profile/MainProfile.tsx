import React, { useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import "./MainProfile.scss";
import ProfileKeys from "./ProfileKeys";
import SetKeys from "./SetKeys";
import profileService from "../../service/profileService";
import { updateProfile } from "../../store/action-creators/profileActions";

const MainProfile = () => {
    const dispatch = useAppDispatch();
    const { user } = useTypedSelector((state) => state.userReducer);
    const { profile } = useTypedSelector((state) => state.profileReducer);
    const [updateMode, setUpdateMode] = useState(true);
    const [formValues, setFormValues] = useState({ name: "", email: "", pubkey: "" });
    const [notification, setNotification] = useState({ addProfile: "" });

    const addProfile = () => {
        profileService.createProfile().then((r) => {
            setNotification({ addProfile: r.data.status });
        });
    };

    const update = () => {
        dispatch(
            updateProfile({
                name: formValues.name || undefined,
                email: formValues.email || undefined,
                pubkey: formValues.pubkey || undefined,
            })
        );
        setFormValues({ name: "", email: "", pubkey: "" });
        toggleUpdateMode();
    };

    const toggleUpdateMode = () => {
        setNotification({ addProfile: "" });
        setUpdateMode((p) => !p);
    };

    // useEffect(() => {
    //     dispatch(getProfile());
    //     console.log("first");
    // }, [dispatch]);

    return (
        <main className="profile">
            <header className="profile__header">
                <h2>User: {user.username}</h2>
            </header>
            <div className="profile-detail">
                <div className="profile__add" onClick={addProfile}>
                    + <span> {notification.addProfile}</span>
                </div>
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
                            />
                        </p>
                        <p className="profile-detail__item">
                            <span>Email: </span>
                            <input
                                type="text"
                                value={formValues.email}
                                onChange={({ target }) => setFormValues((p) => ({ ...p, email: target.value }))}
                            />
                        </p>
                        <p className="profile-detail__item">
                            <span>Public key: </span>
                            <input
                                type="text"
                                value={formValues.pubkey}
                                onChange={({ target }) => setFormValues((p) => ({ ...p, pubkey: target.value }))}
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

import React, { useState } from "react";
import "./MainProfile.scss";

const SetKeys = () => {
    // TODO: to one state
    const [publicKey, setPublicKey] = useState("");
    const [privatKey, setPrivatKey] = useState("");

    const submitPublicKey = (e: React.FormEvent) => {
        e.preventDefault();
        setPublicKey("");
        setPrivatKey("");
        console.log(publicKey);
    };

    return (
        <section className="profile__wrap">
            <div className="profile__subtitle">
                <h3>Set profiles keys</h3>
            </div>
            <form className="key-form">
                <div className="key-form__inner">
                    <label htmlFor="key_pub">Public:</label>
                    <input
                        placeholder="-"
                        className="key-form__textfield"
                        value={publicKey}
                        type="text"
                        name="key_pub"
                        onChange={(e) => {
                            setPublicKey(e.target.value);
                        }}
                    />
                </div>

                <div className="key-form__inner">
                    <label htmlFor="key_priv">Private:</label>
                    <input
                        placeholder="-"
                        className="key-form__textfield"
                        value={privatKey}
                        type="text"
                        name="key_priv"
                        onChange={(e) => {
                            setPrivatKey(e.target.value);
                        }}
                    />
                </div>
                <input type="submit" value={"submit"} onClick={submitPublicKey} />
            </form>
        </section>
    );
};

export default SetKeys;

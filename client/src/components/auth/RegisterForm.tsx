import React, { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { toggleModal } from "../../store/action-creators/modalActions";
import { login, registration } from "../../store/action-creators/userActions";
import { validateForm } from "../../utils";
import "./AuthForm.scss";

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const [{ username, password }, setFormContent] = useState({ username: "", password: "" });
    const { modal } = useTypedSelector((state) => state.modalReducer);
    const { error, user } = useTypedSelector((state) => state.userReducer);

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const passErrors = validateForm.pass(password);
        const loginErrors = validateForm.login(username);

        if (passErrors.length !== 0 || loginErrors.length !== 0) {
            for (let i of [...passErrors, ...loginErrors]) {
                console.log(i.message);
            }
            return;
        }
        await dispatch(registration({ username, password }));

        setFormContent({ username: "", password: "" });
    };

    const updateForm = (inputData: string, isPassword: boolean): void => {
        if (!isPassword) {
            console.log(isPassword);
            setFormContent((prevForm) => {
                return { ...prevForm, username: inputData };
            });
        } else {
            setFormContent((prevForm) => {
                return { ...prevForm, password: inputData };
            });
        }
    };

    useEffect(() => {
        setFormContent({ username: "", password: "" });
    }, [modal]);

    useEffect(() => {
        if (user.username) {
            dispatch(login({ username, password }));
            dispatch(toggleModal());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <div className="form_reg">
            <form onSubmit={handlerSubmit}>
                <label htmlFor="login">username:</label>
                <input
                    name="login"
                    type="text"
                    className="form__input"
                    value={username}
                    onChange={(e) => updateForm(e.target.value, false)}
                />
                <label htmlFor="pass">Password</label>
                <input
                    name="pass"
                    type="text"
                    className="form__input"
                    value={password}
                    onChange={(e) => updateForm(e.target.value, true)}
                />
                <input type="submit" className="form__btn" />
                {error && <span style={{ color: "red" }}>error: {error}</span>}
            </form>
        </div>
    );
};

export default RegisterForm;

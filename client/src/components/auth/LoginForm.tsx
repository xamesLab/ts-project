import React, { useState } from "react";
import { validateForm } from "../../utils";
import "./AuthForm.css";

// interface IRegForm {
//     login: string;
//     password: string;
// }

const LoginForm = () => {
    const [formContent, setFormContent] = useState({ login: "", password: "" });

    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const passErrors = validateForm.pass(formContent.password);
        const loginErrors = validateForm.login(formContent.login);

        if (passErrors.length !== 0 || loginErrors.length !== 0) {
            for (let i of [...passErrors, ...loginErrors]) {
                console.log(i.message);
            }
            return;
        }

        setFormContent({ login: "", password: "" });
    };

    const updateForm = (inputData: string, isPassword: boolean): void => {
        if (!isPassword) {
            console.log(isPassword);
            setFormContent((prevForm) => {
                return { ...prevForm, login: inputData };
            });
        } else {
            setFormContent((prevForm) => {
                return { ...prevForm, password: inputData };
            });
        }
    };
    return (
        <div className="form_reg">
            <form onSubmit={handlerSubmit}>
                <label htmlFor="login">login:</label>
                <input
                    name="login"
                    type="text"
                    className="form__input"
                    value={formContent.login}
                    onChange={(e) => updateForm(e.target.value, false)}
                />
                <label htmlFor="pass">Password</label>
                <input
                    name="pass"
                    type="password"
                    className="form__input"
                    value={formContent.password}
                    onChange={(e) => updateForm(e.target.value, true)}
                />
                <input type="submit" className="form__btn" />
            </form>
        </div>
    );
};

export default LoginForm;

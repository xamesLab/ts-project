import React, { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { toggleModal } from "../../store/action-creators/modalActions";
import { registration } from "../../store/action-creators/userActions";
import { validateForm } from "../../utils";
import "./AuthForm.css";

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const [formContent, setFormContent] = useState({ login: "", password: "" });
    const { modal } = useTypedSelector((state) => state.modalReducer);

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const passErrors = validateForm.pass(formContent.password);
        const loginErrors = validateForm.login(formContent.login);

        if (passErrors.length !== 0 || loginErrors.length !== 0) {
            for (let i of [...passErrors, ...loginErrors]) {
                console.log(i.message);
            }
            return;
        }

        await dispatch(registration({ username: "xames3", password: "123456" }));
        dispatch(toggleModal());

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

    useEffect(() => {
        setFormContent({ login: "", password: "" });
    }, [modal]);

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
                    type="text"
                    className="form__input"
                    value={formContent.password}
                    onChange={(e) => updateForm(e.target.value, true)}
                />
                <input type="submit" className="form__btn" />
            </form>
        </div>
    );
};

export default RegisterForm;

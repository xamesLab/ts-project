import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
    return (
        <div className="form_reg">
            <form>
                <input type="text" className="form__input" />
                <input type="text" className="form__input" />
                <input type="submit" className="form__btn" />
            </form>
        </div>
    );
};

export default RegisterForm;

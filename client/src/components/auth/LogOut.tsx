import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { toggleModal } from "../../store/action-creators/modalActions";
import { logout } from "../../store/action-creators/userActions";

const LogOut = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handlerLogout = () => {
        dispatch(logout());
        dispatch(toggleModal());
        navigate("/");
    };

    return (
        <div>
            Quit?
            <br />
            <button onClick={handlerLogout}>quit</button>
        </div>
    );
};

export default LogOut;

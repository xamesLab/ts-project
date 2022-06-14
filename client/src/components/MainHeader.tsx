import React from "react";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { setModalContent } from "../store/action-creators/modalActions";
import "./MainHeader.css";

const MainHeader: React.FC = () => {
    const dispatch = useAppDispatch();

    const handlerModal = (content: string) => {
        dispatch(setModalContent(content));
    };
    return (
        <main className="header">
            <section className="header__wrapper">
                <div className="header__logo">
                    <h2>LOGO</h2>
                </div>
                <div className="header__auth">
                    <div className="header__profile header__btn"></div>
                    <div className="header__login header__btn" onClick={() => handlerModal("Login")}>
                        Login
                    </div>
                    <div className="header__register header__btn" onClick={() => handlerModal("Registration")}>
                        Register
                    </div>
                    <div className="header__logout header__btn">Logout</div>
                </div>
            </section>
        </main>
    );
};

export default MainHeader;
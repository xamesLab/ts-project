import React from "react";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { setModalContent, toggleModal } from "../store/action-creators/modalActions";
import { toggleTheme } from "../store/action-creators/themeActions";
import { MainLogo } from "../styles/components";
import "./MainHeader.scss";

const MainHeader: React.FC = () => {
    const dispatch = useAppDispatch();

    const handlerTheme = () => {
        dispatch(toggleTheme());
    };

    const handlerModal = (content: string) => {
        dispatch(setModalContent(content));
        dispatch(toggleModal());
    };
    return (
        <main className="header">
            <section className="header__wrapper">
                <div className="header__logo">
                    <MainLogo>LOGO</MainLogo>
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
                    <div className="header__theme header__btn" onClick={handlerTheme}>
                        toggle theme
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainHeader;

import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { setModalContent, toggleModal } from "../store/action-creators/modalActions";
import { toggleTheme } from "../store/action-creators/themeActions";
import "./MainHeader.scss";

const MainHeader: React.FC = () => {
    const dispatch = useAppDispatch();
    const { theme } = useTypedSelector((state) => state.themeReducer);
    const { user, isAuth } = useTypedSelector((state) => state.userReducer);

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
                    <NavLink to={"/"}>
                        <h2>LOGO</h2>
                    </NavLink>
                </div>
                <div className="header__auth">
                    {!isAuth && (
                        <>
                            <div className="header__login header__btn" onClick={() => handlerModal("Login")}>
                                Login
                            </div>
                            <span>|</span>
                            <div className="header__register header__btn" onClick={() => handlerModal("Registration")}>
                                Register
                            </div>
                        </>
                    )}

                    {isAuth && (
                        <>
                            <NavLink to={"/manager"} className="header__profile header__btn">
                                <span className="header__profile_admin">Admin</span>
                            </NavLink>
                            <NavLink to={"/profile"} className="header__profile header__btn">
                                <span className="header__profile_name">{user?.username}</span>
                            </NavLink>
                            <span>|</span>
                            <div className="header__logout header__btn" onClick={() => handlerModal("Logout")}>
                                Logout
                            </div>
                        </>
                    )}
                    <div className="header__theme" onClick={handlerTheme}>
                        {theme === "theme--default" ? "L" : "D"}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainHeader;

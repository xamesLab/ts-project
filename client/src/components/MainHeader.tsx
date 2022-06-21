import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { setModalContent, toggleModal } from "../store/action-creators/modalActions";
import { baseTheme } from "../styles/theme";
import "./MainHeader.css";

interface IStyleProps {
    primary: boolean;
}

const MainLogo = styled.h2<{ primary: boolean }>`
    color: ${(props) => (props.primary ? baseTheme.colors.primary : "black")};
`;

const MainHeader: React.FC<IStyleProps> = ({ primary }) => {
    const dispatch = useAppDispatch();

    const handlerModal = (content: string) => {
        dispatch(setModalContent(content));
        dispatch(toggleModal());
    };
    return (
        <main className="header">
            <section className="header__wrapper">
                <div className="header__logo">
                    {/* <h2>LOGO</h2> */}
                    <MainLogo primary={true}>LOGO</MainLogo>
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

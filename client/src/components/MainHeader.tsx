import React from "react";
import "./MainHeader.css";

const MainHeader: React.FC = () => {
    return (
        <main className="header">
            <section className="header__wrapper">
                <div className="header__logo">
                    <h2>LOGO</h2>
                </div>
                <div className="header__auth">
                    <div className="header__profile header__btn">Profile</div>
                    <div className="header__login header__btn">Login</div>
                    <div className="header__register header__btn">Register</div>
                    <div className="header__logout header__btn">Logout</div>
                </div>
            </section>
        </main>
    );
};

export default MainHeader;

import React from "react";
import MainHeader from "./components/MainHeader";
import { useTypedSelector } from "./hooks/useTypedSelector";
import GlobalStyles from "./styles/global";
import Modal from "./UI/Modal";
import { BtnBase, FAIcon, Loader } from "./styles/components";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function Main() {
    const { theme } = useTypedSelector((state) => state.themeReducer);
    const { users } = useTypedSelector((state) => state.usersReducer);
    const { user, loading, isAuth } = useTypedSelector((state) => state.userReducer);
    const handler = () => {
        //dispatch(getUsers());
    };
    const handler2 = () => {
        //userService.test();
    };

    // const handler2 = (e: React.MouseEvent<EventTarget>) => {
    //     let target = e.target as HTMLInputElement;
    //     console.log(target.dataset.t);
    //     console.log(target.textContent);
    // };

    return (
        <div className={`main ${theme}`}>
            <GlobalStyles />
            <Modal />
            <MainHeader />
            {loading ? "loading..." : ""}
            <div >
                <div className="base">test theme scss {theme}</div>
            </div>
            <header className="">
                {user.username || "user"} auth:{isAuth ? "is auth" : "not auth"}
            </header>
            <button onClick={handler}>test</button>
            <button onClick={handler2}>test-tets</button>
            {users.map((user) => (
                <div key={user._id}>{user.username}</div>
            ))}
            <BtnBase paddingLeftRight={1} paddingTopBottom={0.2}>
                test btn
            </BtnBase>
            <FAIcon icon={faCog} $animated />
            <Loader />
        </div>
    );
}

export default Main;

import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        {/* <React.StrictMode>
            <Main />
        </React.StrictMode> */}
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
);

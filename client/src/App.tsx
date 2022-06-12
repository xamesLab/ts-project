import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [test, setTest] = useState("")

    const handler = ()=>{
        setTest(prev=>{
            return prev?"":"new"
        })
    }

    return (
        <div className="">
            <ul>
                <li className={`old ${test}`}>
                    <span onClick={handler}>test class</span>
                </li>
            </ul>
        </div>
    );
}

export default App;

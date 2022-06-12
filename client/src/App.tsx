import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [test, setTest] = useState((localStorage.getItem("test"))||"a")

    useEffect(()=>{
        localStorage.setItem("test", test)
    },[test])

    return (
        <div className="">
            <header className="">test34</header>
            <p>{test}</p>
            <button onClick={()=>setTest(test+"a")}>click</button>
        </div>
    );
}

export default App;

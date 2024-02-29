import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
function App() {
    return (
        <div className="cairo-uniquifier">
            <NavBar />
            <div className=" mt-28">
                <Outlet />
            </div>
        </div>
    );
}

export default App;

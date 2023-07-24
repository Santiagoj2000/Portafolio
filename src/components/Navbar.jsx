import React, { useState } from "react";
import Menu from "./Menu";
import "./Navbar.css";

export default function Navbar() {

    const [Modal, setModal] = useState(false);
    function HandleModal() {
        setModal(!Modal);
    }

    return (
        <>
        {Modal === false ? 
        <div className="containerNavbar" > 
            <div className="buttonHome" onClick={HandleModal} >
                <button type="">
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </div> :
         <div className="containerNavbar2" > 
                   {Modal ? <Menu closeMenu={HandleModal} ></Menu> : ""}
            <div className="buttonHome" onClick={HandleModal} >
                <button type="">
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </div>}
        </>
    )

}
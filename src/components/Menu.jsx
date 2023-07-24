import React from "react"
import "./Menu.css"
import { useState } from "react";



export default function Menu({ closeMenu }) {

    const [Show, setShow] = useState(true);

    const linkCV = "https://drive.google.com/file/d/15KIG98eCy0OI1_knCLiEK-Sg35CQUq9M/view?usp=sharing";

    function handleClick() {
        const value = !Show
        setShow(value)
        console.log(value)

        setTimeout(() => {
            closeMenu();
        }, 2000)
    };

    return (
        <>
            {Show === true ?
                <div onClick={handleClick} className="container-menu">
                    <button><i className="bi bi-list"></i></button>
                    
                    <div id="containerMenu" className="containerMenu" >
                        <ul>
                            <li><a href="/">perfil </a></li>
                            <li> <a href="/Projects"> Proyectos </a></li>
                            <li><a href={linkCV} target="_blank" rel="noreferrer">Cv</a></li>
                        </ul>
                    </div>

                </div> 
                :
                <div onClick={handleClick} className="container-menu2">
                    <div id="containerMenu2" className="containerMenu2" >
                        <ul>
                            <li><p>perfil</p></li>
                            <li><p>Proyectos</p></li>
                            <li><p>Cv</p></li>
                        </ul>
                    </div>

                </div>}
        </>

    )
}
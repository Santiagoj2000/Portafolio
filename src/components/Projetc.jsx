import React from "react";
import "./Projetc.css"
import proyecto1 from "../Imagenes/proyecto1.jpg";
import proyecto2 from "../Imagenes/proyecto2.jpg";
import proyecto3 from "../Imagenes/proyecto3.jpg";
import proyecto4 from "../Imagenes/proyecto4.jpg";

const projects = [
    {
        id: 0,
        name: "Testimonios",
        img: <img src={proyecto1} alt="imagen de proyecto 1" />,
        description: "En este pequeño proyecto realizamos la creacion de un conponentes sencillo llamado contenedor, que se utiliza como plantilla para luego pasarle los datos de nombre, imagen y testimonio de cada persona, es sencillo y atracctivo, empleamos Java Script y CSS",
        github: "https://github.com/Santiagoj2000/Testimonios.git",
        deploy: "https://testimonios-blond.vercel.app/?vercelToolbarCode=c1icdgewyN-posa"
    },
    {
        id: 1,
        name: "Contador de Clics",
        img: <img src={proyecto2} alt="imagen de proyecto 2" />,
        description: "Este proyecto implementa el Hook UseState que nos permite visualizar de manera inmediata los cambios sobre un componente especifico, implementamos el uso de elementos como componentes. Contiene Java Script y CSS.",
        github: "https://github.com/Santiagoj2000/Contador-de-clics.git",
        deploy: "https://contador-de-clics-psi.vercel.app/?vercelToolbarCode=-oLmc5Q4tyuxIV6"
    },
    {
        id: 2,
        name: "Calculadora Dinamica",
        img: <img src={proyecto3} alt="imagen de proyecto 3" />,
        description: "Este proyecto implementa la funcionalidad children del argumento porps que nos permite mostrar el texto encerrado en un componente dato, al igual que el anterior hacemos uso del hook useState. Esta diseñado en Java Script y CSS.",
        github: "https://github.com/Santiagoj2000/calculadora.git",
        deploy: "https://calculadora-six-bay.vercel.app/"
    },
    {
        id: 3,
        name: "Formulario dinamico",
        img: <img src={proyecto4} alt="imagen de proyecto 4" />,
        description: "Este proyecto implementa un formulario dinamico con colores muy llamativos y atractivos visualmente, se utiliza varios hook como useState y la libreria de bootstrap, se emplea la tecnologia de Java Script y CSS.",
        github: "https://github.com/Santiagoj2000/dynamic-form.git",
        deploy: "https://dynamic-form-phi.vercel.app/?vercelToolbarCode=87pPxcUl5VEjFp2"
    }
]

export default function Projetc() {
    return (

        <div className="ContainerProject" >
            <h1>Mis Proyectos</h1>

            <div className="projects">
                {projects.map((e) => {
                    return (

                        <div key={e.id} className="card">
                            <ul  >
                                <li ><h3>{e.name}</h3></li>
                                <p className="description">{e.description}</p>
                                <li >
                                    {e.img}
                                </li>
                            </ul>
                            <span>
                                <button><a href={e.github} target="_blank" rel="noreferrer">Ir a Github</a></button>
                                <button><a href={e.deploy} target="_blank" rel="noreferrer">Visitar página</a></button>
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
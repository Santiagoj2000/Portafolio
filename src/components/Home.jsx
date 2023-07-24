import "./Home.css"
import imglinkedin from "../Imagenes/linkedin.png";
import imgInstagram from "../Imagenes/instagram.png";
import imgGitHub from "../Imagenes/github.png";
import fotoperfil from "../Imagenes/fotoperfil.jpg"

export default function Home() {


  return (

    <div id="container" className="containerHome" >

      <div className="profileHome" >

        <div className="nameHome" >
          <span>
            <img src={fotoperfil} alt="imagen.jpg" style={{ width: " 300px", height: "300px", borderRadius: "10px" }} />
          </span>
          <h1>Santiago Jose Narvaez Vidal</h1>
        </div>
        <div className="resumenHome" >

          <span>
            <p>
              Profesional en Ingenieria de sistemas, con conocimientos y aptitudes en conexión a bases de
              datos, direccionamiento IP, DHCP, subnetting, Vlans, Interfaces de red. Experiencia en el
              área de las telecomunicaciones, Estaciones de acceso Celular, tecnologías GSM,UMTS y LTE,
              Enlaces microondas y de fibra óptica de ultima milla. Conocimientos y entendimiento de
              tecnologías ópticas como DWDM y MPLS.
            </p>
          </span>
          <br />
<hr />
          <br />
          <ul>
            <li><span><a href="https://www.linkedin.com/in/santiago-jose-narvaez-vidal-a0230119b/" target="_blank" rel="noreferrer">
              <img className="imgrs" src={imglinkedin} alt="Imagen de linkedin" /></a></span></li>
            <li><span><a href="https://www.instagram.com/santy_2000n/" target="_blank" rel="noreferrer">
              <img className="imgrs" src={imgInstagram} alt="imagen instagram" /></a></span></li>
            <li><span><a href="https://github.com/Santiagoj2000" target="_blank" rel="noreferrer">
              <img className="imgrs" src={imgGitHub} alt="imagen github" /></a></span></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
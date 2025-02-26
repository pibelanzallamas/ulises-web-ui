import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about">
      <h3>Desarrollador Full Stack</h3>
      <p>
        Hola! Me llamo Brandon y soy un apasionado por el diseño de páginas web,
        me egresé como Desarrollador Full Stack en un Bootcamp de Plataforma 5 y
        desde entonces no he parado de crear sitios web inspiradores y
        desafientes. Desarrollo sitios para marcas personales, pymes, comercios,
        artesanias, artesanos y muchos más. Diseño y desarrollo apartir de un
        idea principal y del branding de la marca. Para hacer tu consulta
        ingresá
        <Link to="/contact" className="links special-word">
          <p>&nbsp;acá&nbsp;</p>
        </Link>
        ó comunicate con mis redes de contacto.
      </p>
      <ul className="about-links">
        <a
          href="https://api.constata.eu/certificate/research+riding+veal+bonfire+dedicator"
          target="_blank"
          className="links"
        >
          Titulo Full Stack Developer
        </a>
        <Link className="links" to={"/works"}>
          Mis Sitios Web
        </Link>
        <a className="links" href="">
          Mis Reseñas
        </a>
      </ul>
    </main>
  );
}

export default About;

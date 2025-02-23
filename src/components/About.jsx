import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about">
      <h3>Desarrollador Full Stack</h3>
      <p>
        Hola! Me llamo Brandon y soy un apasionado por el diseño de páginas web,
        me egresé como Desarrollador Full Stack en un Bootcamp de Plataforma 5 y desde
        entonces no he parado de crear sitios web inspiradores y desafientes.
        Desarrollo sitios para marcas personales, pymes, comercios,
        artesanias, artesanos, pequeños locales, gimnasios, esteticas, y muchos más. Diseño y desarrollo apartir de un idea
        luego se hace un branding de la marca
	<!-- principal y del branding de la marca. -->
 Para hacer tu consulta ingresá
        acá:
        <Link to="/contact" className="links special-word">
          <p> LINK </p>
        </Link>
        ó comunicate con mis redes de contancto.
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

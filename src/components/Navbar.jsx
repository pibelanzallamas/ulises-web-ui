import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <p>
        Ulises Web/UI <span> 🖼️ 👨‍🎨</span>
      </p>
      <ul className="menu-list">
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/works">Mis Sitios</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/fees">Mis Aranceles</Link>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-title">
        Ulises Web/UI <span> 🖼️ 👨‍🎨</span>
      </Link>
      <ul className="menu-list">
        {/* <Link to="/about">Sobre Nosotros</Link> */}
        <Link to="/works">Mis Sitios</Link>
        <Link to="/fees">Mis Aranceles</Link>
        <Link to="/contact">Contacto</Link>
      </ul>
    </nav>
  );
}

export default Navbar;

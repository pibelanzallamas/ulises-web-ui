import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({}) {
  const [clicked, setClicked] = useState(false);

  const handleHambu = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <Link to="/" className="nav-title">
          Ulises Web/Ui <span> 🖼️ 👨‍🎨</span>
        </Link>
        <ul className="menu-list">
          <Link to="/works">Mis Sitios</Link>
          <Link to="/fees">Mis Aranceles</Link>
          <Link to="/contact">Contacto</Link>
        </ul>
        <a className="hamburger-icon" onClick={() => handleHambu()} href="#">
          <figure>
            <img
              src={
                clicked
                  ? "https://res.cloudinary.com/daynclfo8/image/upload/v1731163324/x_lqjkvf.svg"
                  : "https://res.cloudinary.com/daynclfo8/image/upload/v1731162233/menu_h06lbd.svg"
              }
              alt="hamburger-icon"
            ></img>
          </figure>
        </a>
      </nav>
      {clicked && (
        <div className="mobile-menu">
          <Link to="/works">Mis Sitios</Link>
          <Link to="/fees">Mis Aranceles</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;

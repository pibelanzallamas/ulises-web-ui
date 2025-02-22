import React from "react";
import { Link } from "react-router-dom";

function Fees() {
  return (
    <main className="fees">
      <h3>Mis Aranceles</h3>
      <div className="fees-prices">
        <div className="fees-individual">
          <span>💵</span>
          <Link to={"/contact"} state={{ job: "inicial" }}>
            Paquete Incial
          </Link>
          <ul>
            <li>Sitio Web</li>
            <li>1 Formulario</li>
            <li>Imagénes</li>
          </ul>
          <b>$70.000</b>
        </div>
        <div className="fees-individual">
          <span>🛒</span>
          <Link to={"/contact"} state={{ job: "medio" }}>
            Paquete Medio
          </Link>
          <ul>
            <li>Sitio Web</li>
            <li>1 Formulario</li>
            <li>Imagénes</li>
            <li>URL Personalizada</li>
            <li>Mantenimiento</li>
          </ul>
          <b>$150.000</b>
        </div>
        <div className="fees-individual">
          <span>💎</span>
          <Link to={"/contact"} state={{ job: "diamante" }}>
            Paquete Diamante
          </Link>
          <ul>
            <li>Sitio Web</li>
            <li>1 Formulario</li>
            <li>Imagénes</li>
            <li>URL Personalizada</li>
            <li>Vídeos</li>
            <li>Mantenimiento</li>
            <li>Base de Datos</li>
            <li>Actualizaciones</li>
          </ul>
          <b>$250.000</b>
        </div>
      </div>
    </main>
  );
}

export default Fees;

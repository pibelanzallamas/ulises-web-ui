import React from "react";

function Fees() {
  return (
    <main className="fees">
      <h3>Mis Aranceles</h3>
      <div className="fees-prices">
        <div className="fees-individual">
          <span>💵</span>
          <p>Paquete Incial</p>
          <ul>
            <li>Sitio Web</li>
            <li>1 Formulario</li>
            <li>Imagénes</li>
          </ul>
          <b>$150.000</b>
        </div>
        <div className="fees-individual">
          <span>🛒</span>
          <p>Paquete Medio</p>
          <ul>
            <li>Sitio Web</li>
            <li>1 Formulario</li>
            <li>Imagénes</li>
            <li>Url Personaliada</li>
            <li>Mantenimiento</li>
          </ul>
          <b>$250.000</b>
        </div>
        <div className="fees-individual">
          <span>💎</span>
          <p>Paquete Diamante</p>
          <ul>
            <li>Sitio Web</li>
            <li>1 Formulario</li>
            <li>Imagénes</li>
            <li>Url Personaliada</li>
            <li>Vídeos</li>
            <li>Mantenimiento</li>
            <li>Base de Datos</li>
            <li>Actualizaciones</li>
          </ul>
          <b>$450.000</b>
        </div>
      </div>
    </main>
  );
}

export default Fees;

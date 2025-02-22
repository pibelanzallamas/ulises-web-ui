import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const textareaRef = useRef(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const location = useLocation();
  const [preOrd, setPreOrd] = useState(location.state?.job || "");
  const [preOrdMsg, setPreOrdMsg] = useState(`¡Hola! ¿Cómo estás?
Estaría interesado/a en construir un sitio web de plan ${preOrd}...`);
  const [msg, setMsg] = useState(preOrd ? preOrdMsg : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name,
      number,
      msg,
    };
    console.log(obj);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, []);

  return (
    <main className="contact">
      <h3>Contact</h3>
      <div className="contact-info">
        <p>
          <span>📲</span> 1139241058
        </p>
        <p>
          <span>📩</span> brancastillo.developer@icloud.com
        </p>
        <p>
          <span>📍</span> Buenos Aires, Argentina
        </p>
      </div>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)} className="contact-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre"
        />
        <input
          vale={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="Número"
        />
        <textarea
          ref={textareaRef}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="Presupuesto Gratis!"
          rows={8}
        />
        <button type="submit">Enviar!</button>
      </form>
    </main>
  );
}

export default Contact;

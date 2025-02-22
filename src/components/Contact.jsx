import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name,
      number,
      msg,
    };
    console.log(obj);
  };

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

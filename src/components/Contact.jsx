import React, { useState, useEffect, useRef, CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { alerts } from "../utils/alerts";
import emailjs from "emailjs-com";

function Contact() {
  const textareaRef = useRef(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const location = useLocation();
  const [preOrd, setPreOrd] = useState(location.state?.job || "");
  const [preOrdMsg, setPreOrdMsg] = useState(`¡Hola! ¿Cómo estás?
Estaría interesado/a en construir un sitio web de paquete ${preOrd}...`);
  const [msg, setMsg] = useState(preOrd ? preOrdMsg : "");
  const [sending, setSending] = useState(false);
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: name,
      from_number: number,
      message: msg,
    };

    try {
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );

      if (res) {
        alerts(
          "Gracias por su mensaje!",
          "Recibira una respuesta en pocos minutos.",
          "success"
        );

        setName("");
        setNumber("");
        setMsg("");
        setSending(false);
      } else {
        alerts(
          "Lo siento!",
          "Hubo un problema en el servidor, intente de nuevo.",
          "warning"
        );
      }
    } catch (e) {
      alerts(
        "Lo siento!",
        "Hubo un problema en el servidor, intente por otro medio.",
        "warning"
      );
      console.log(e);
    }
    setSending(false);
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
          required
          placeholder="Nombre"
        />
        <input
          vale={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          placeholder="Número"
        />
        <textarea
          ref={textareaRef}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          required
          placeholder="Presupuesto Gratis!"
          rows={8}
        />

        <button type="submit">Enviar!</button>
      </form>
    </main>
  );
}

export default Contact;

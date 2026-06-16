"use client";

import { useState } from "react";
import Header from "../components/Header/Header";
import styles from "./contacto.module.css";

export default function Contacto() {
const [activeForm, setActiveForm] = useState("empresa");
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState({});

const handleSubmit = async (e) => {
e.preventDefault();


setLoading(true);
setErrors({});

const formData = new FormData(e.target);

const data = Object.fromEntries(formData.entries());

try {
  const res = await fetch("/api/contacto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      tipo: activeForm,
    }),
  });

  const result = await res.json();

  if (res.ok) {
    alert("✅ Mensaje enviado correctamente");
    e.target.reset();
  } else {
    const fieldErrors = {};

    if (result.details) {
      result.details.forEach((err) => {
        const field = err.path[0];
        fieldErrors[field] = err.message;
      });
    }

    setErrors(fieldErrors);

    alert(
      result.error === "Datos inválidos"
        ? "Revisá los campos del formulario"
        : result.error
    );
  }
} catch (error) {
  console.error(error);
  alert("❌ Error en el servidor");
} finally {
  setLoading(false);
}


};

return (
<> <Header
     title="TalentLink"
     subtitle="Estamos listos para ayudarte a encontrar talento o impulsar tu carrera."
     bgImage="/img/headerinicio.jpg"
     showContent={true}
     ctaText="Contactanos"
     ctaLink="#contacto"
   />


  <section className={styles.contactoSection} id="contacto">
    <div className={styles.container}>
      <h2>Elegí tu opción y completá el formulario</h2>

      <div className={styles.tabButtons}>
        <button
          type="button"
          className={`${styles.tabButton} ${
            activeForm === "empresa" ? styles.active : ""
          }`}
          onClick={() => setActiveForm("empresa")}
        >
          Quiero contratar talento
        </button>

        <button
          type="button"
          className={`${styles.tabButton} ${
            activeForm === "candidato" ? styles.active : ""
          }`}
          onClick={() => setActiveForm("candidato")}
        >
          Busco mi próximo empleo
        </button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>

        {/* Honeypot anti bots */}
        <input
          type="text"
          name="website"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className={styles.input}
        />
        {errors.nombre && (
          <p className={styles.error}>{errors.nombre}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email}</p>
        )}

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          className={styles.input}
        />
        {errors.telefono && (
          <p className={styles.error}>{errors.telefono}</p>
        )}

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          className={styles.textarea}
        />
        {errors.mensaje && (
          <p className={styles.error}>{errors.mensaje}</p>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <div className={styles.infoSection}>
        <h3>Visítanos</h3>

        <p>
          Av. 9 de Julio 1000, 
          <br />
          B1708 Cdad. Autónoma de Buenos Aires,
          <br />
          Argentina
        </p>

        <iframe
          src="https://www.google.com/maps?q=Av.+9+de+Julio+1000,+B1708+Cdad.+Autónoma+de+Buenos+Aires&output=embed"
          width="100%"
          height="250"
          style={{
            border: 0,
            borderRadius: "12px",
          }}
          loading="lazy"
        />
      </div>
    </div>
  </section>
</>

);
}

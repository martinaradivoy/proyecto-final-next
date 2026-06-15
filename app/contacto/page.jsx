"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styles from "./contacto.module.css";

export default function Contacto() {
  const [activeForm, setActiveForm] = useState("empresa");
  const [datos, setDatos] = useState([]);

  // Cargar datos al iniciar
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];
    setDatos(datosGuardados);
  }, []);

  // Guardar datos
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevoDato = Object.fromEntries(formData.entries());
    nuevoDato.tipo = activeForm; // Guardamos qué tipo de formulario era

    const nuevosDatos = [...datos, nuevoDato];
    setDatos(nuevosDatos);
    localStorage.setItem("datos", JSON.stringify(nuevosDatos));

    alert("✅ Mensaje enviado y guardado localmente");
    e.target.reset();
  };

  // Descargar JSON
  const descargarJSON = () => {
    const blob = new Blob([JSON.stringify(datos, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "datos_contacto.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header
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

          {/* Botones para cambiar formulario */}
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${
                activeForm === "empresa" ? styles.active : ""
              }`}
              onClick={() => setActiveForm("empresa")}
            >
              Quiero contratar talento
            </button>
            <button
              className={`${styles.tabButton} ${
                activeForm === "candidato" ? styles.active : ""
              }`}
              onClick={() => setActiveForm("candidato")}
            >
              Busco mi próximo empleo
            </button>
          </div>

          {/* Formulario empresa */}
          {activeForm === "empresa" && (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre de la empresa"
                required
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={styles.input}
              />
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                required
                className={styles.input}
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                required
                className={styles.textarea}
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                Enviar
              </button>
            </form>
          )}

          {/* Formulario candidato */}
          {activeForm === "candidato" && (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                required
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={styles.input}
              />
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                required
                className={styles.input}
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                required
                className={styles.textarea}
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                Enviar
              </button>
            </form>
          )}

          {/* Botón JSON */}
          <button
            onClick={descargarJSON}
            className={styles.submitButton}
            style={{ marginTop: "10px" }}
          >
            Descargar JSON
          </button>


          {/* Info + mapa */}
          <div className={styles.infoSection}>
            <h3>Visítanos</h3>
            <p>3 de febrero 798, Bahía Blanca, Argentina</p>
            <iframe
              src="https://www.google.com/maps?q=3+de+Febrero+798,+Bahía+Blanca&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
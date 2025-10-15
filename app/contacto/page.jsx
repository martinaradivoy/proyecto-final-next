"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styles from "./contacto.module.css";

export default function Contacto() {
  const [activeForm, setActiveForm] = useState("empresa"); // variable de estado "empresa" o "candidato"
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [datos, setDatos] = useState([]);

 // Cargar datos de localStorage al iniciar la página
 useEffect(() => {
  const datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];
  setDatos(datosGuardados);
  }, []);

 const CargarDatos = (e) => {
  e.preventDefault();

  const nuevoDato = { nombre, email, telefono, mensaje };

  // Guardar en estado y localStorage
  const nuevosDatos = [...datos, nuevoDato];
  setDatos(nuevosDatos);
  localStorage.setItem("datos", JSON.stringify(nuevosDatos));

  alert("Mensaje enviado y guardado localmente.");

  // Limpiar formulario
  setNombre("");
  setTelefono("");
  setEmail("");
  setMensaje("");
  };

 // Función para descargar los datos en un archivo JSON
 const descargarJSON = () => {
  const blob = new Blob([JSON.stringify(datos, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "datos.json";
  link.click();
  URL.revokeObjectURL(url);
 };
  
 
  return (
    <>
      {/* Header */}
      <Header
        title="TalentLink"
        subtitle="Estamos listos para ayudarte a encontrar talento o impulsar tu carrera."
        bgImage="/img/headerinicio.jpg"
        showContent={true}
        ctaText="Contactanos"
        ctaLink="#contacto"
      />

      {/* Sección de Contacto */}
      <section className={styles.contactoSection} id="contacto">
        <div className={styles.container}>
          <h2>Elegí tu opción y completá el formulario</h2>

          <div className={styles.formContainer}>
            {/* Botones para elegir formulario */}
            <div className={styles.tabButtons}>
              <button
                className={`${styles.tabButton} ${activeForm === "empresa" ? styles.active : ""}`}
                onClick={() => setActiveForm("empresa")}
              >
                Quiero contratar talento
              </button>
              <button
                className={`${styles.tabButton} ${activeForm === "candidato" ? styles.active : ""}`}
                onClick={() => setActiveForm("candidato")}
              >
                Busco mi próximo empleo
              </button>
            </div>

            {/* Formulario Empresa */}
            {activeForm === "empresa" && (
              <form id="empresa" className={styles.form} onSubmit= {CargarDatos}>
                <input type="text" placeholder="Nombre de la empresa" value={nombre} onChange={(e) => setNombre(e.target.value)} className={styles.input} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className={styles.input} />
                <input type="text" placeholder="Teléfono" value={telefono} onChange ={(e)=> setTelefono(e.target.value)} className={styles.input} />
                <textarea placeholder="Mensaje" value={mensaje} onChange={(e)=>setMensaje(e.target.value)} className={styles.textarea}></textarea>
                <button type="submit" className={styles.submitButton}>Enviar</button>
              </form>
            )}

            {/* Formulario Candidato */}
            {activeForm === "candidato" && (
              <form id="candidato" onSubmit= {CargarDatos} className={styles.form}>
                <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} className={styles.input} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className={styles.input} />
                <input type="text" placeholder="Teléfono" value={telefono} onChange ={(e)=> setTelefono(e.target.value)} className={styles.input} />
                <textarea placeholder="Mensaje" value={mensaje} onChange={(e)=>setMensaje(e.target.value)} className={styles.textarea}></textarea>
                <button type="submit" className={styles.submitButton}>Enviar</button>
              </form>
            )}
          </div>

          {/* Botón para descargar JSON */}
          <button onClick={descargarJSON} className={styles.submitButton} style={{ marginTop: "10px" }}>
            Descargar JSON
          </button>

          {/* Mostrar los datos guardados */}
          <div>
            <h3>Datos guardados:</h3>
            <ul>
              {datos.map((item, index) => (
                <li key={index}>
                  {item.nombre} - {item.email} - {item.telefono} - {item.mensaje}
                </li>
              ))}
            </ul>
          </div>

          {/* Información y mapa */}
          <div className={styles.infoSection}>
            <h3>Visitanos</h3>
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

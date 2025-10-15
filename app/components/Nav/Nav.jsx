"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./nav.module.css";

export default function Nav() {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const toggleMenu = () => {
    setEstaAbierto(!estaAbierto);
  };

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <div className={styles.containerLogo}>
        <Link href="/inicio" className={styles.logoLink}>
          <img
            className={styles.logo}
            src="/img/logo.png"
            alt="TalentLink Logo"
          />
        </Link>
        <h1>TalentLink</h1>
      </div>

      {/* Botón hamburguesa */}
      <button
        className={styles.hamburguesa}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Menú */}
      <ul
        className={`${styles.containerNav} ${
          estaAbierto ? styles.abierto : ""
        }`}
      >
        <li>
          <Link href="/inicio" onClick={() => setEstaAbierto(false)}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/nosotros" onClick={() => setEstaAbierto(false)}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="/servicios" onClick={() => setEstaAbierto(false)}>
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/contacto" onClick={() => setEstaAbierto(false)}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

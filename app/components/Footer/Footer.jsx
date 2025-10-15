import styles from "./footer.module.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerfooter}>
        <p>© 2025 TalentLink. Todos los derechos reservados.</p>
        <p>
          Contacto:{" "}
          <a href="mailto:info@talentlink.com">info@talentlink.com</a> | Tel: +54
          291 516 2907
        </p>
        <div className={styles.redes}>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}


  
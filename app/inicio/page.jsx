import Header from "../components/Header/Header";
import styles from "./inicio.module.css";

export default function Inicio() {
  return (
    <>
      {/* Header */}
      <Header
  title="TalentLink: Tu puente hacia el talento ideal"
  subtitle="Impulsamos oportunidades laborales y ayudamos a las empresas a crecer con el mejor personal."
  buttons={[
    { text: "Quiero contratar talento", link: "/contacto#contacto" },
    { text: "Busco mi próximo empleo", link: "/contacto#contacto" }
  ]}
  bgImage="/img/headerinicio.jpg"
/>


      {/* Sección Beneficios principales */}
      <section className={styles.beneficios} id="inicio" >
        <div className={styles.container}>
          <h2>Por qué elegir TalentLink</h2>
          <div className={styles.beneficiosGrid}>
            <div className={styles.card} >
              <span className={styles.icono}>⚡</span>
              <h3>Rapidez en la contratación</h3>
              <p>Nos adaptamos a tus tiempos, conectando empresas y talentos de manera ágil y eficiente.</p>
            </div>
            <div className={styles.card}>
              <span className={styles.icono}>💼</span>
              <h3>Soluciones personalizadas</h3>
              <p>Creamos planes de tercerización adaptados a cada necesidad y sector.</p>
            </div>
            <div className={styles.card}>
              <span className={styles.icono}>🌟</span>
              <h3>Calidad y confianza</h3>
              <p>Trabajamos con profesionales altamente calificados y procesos transparentes.</p>
            </div>
            <div className={styles.card}>
              <span className={styles.icono}>📊</span>
              <h3>Soporte y seguimiento</h3>
              <p>Estamos presentes en cada etapa para garantizar resultados sostenibles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Historias de éxito */}
      <section className={styles.historias}>
        <div className={styles.container}>
          <h2>Historias de éxito</h2>
          <p>
            Cada empresa y profesional que trabaja con TalentLink es un caso de éxito. 
            Hemos ayudado a cientos de organizaciones a encontrar talento y a profesionales a alcanzar sus objetivos.
          </p>
          <div className={styles.historiasGrid}>
            <div className={styles.historiasCard}>
              <img src="/img/caso1.jpg" alt="Caso 1" />
              <p>“Gracias a TalentLink, encontramos al equipo ideal en tiempo récord.”</p>
            </div>
            <div className={styles.historiasCard}>
              <img src="/img/caso2.jpg" alt="Caso 2" />
              <p>“Pude conseguir un puesto que me permitió crecer profesionalmente.”</p>
            </div>
            <div className={styles.historiasCard}>
              <img src="/img/caso3.jpg" alt="Caso 3" />
              <p>“El soporte y seguimiento de TalentLink hicieron toda la diferencia.”</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

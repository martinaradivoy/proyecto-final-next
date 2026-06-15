import styles from "./nosotros.module.css";
import Header from "../components/Header/Header";



export default function Nosotros() {
  return (
    <>
    <Header
      title="Quiénes somos"
      subtitle="Conocé nuestra historia, misión y valores"
      ctaText="Conocénos"
      ctaLink="#nosotros"
      bgImage="/img/headerinicio.jpg"
    />

    {/* Sección de Nosotros */}
    <section className={styles.section} id="nosotros">
      <div className={styles.container}>

        {/* Introducción con imagen */}
        <div className={styles.intro}>
          <div>
            <p>
              En <span className={styles.marca}>TalentLink</span> creemos que el
              verdadero motor de toda organización son las personas. Nos
              especializamos en conectar talento con empresas que buscan crecer,
              brindando soluciones flexibles y personalizadas de tercerización de
              empleo.
            </p>
            <p>
              Nuestro enfoque combina tecnología, innovación y un trato humano,
              para garantizar procesos transparentes y efectivos tanto para
              empresas como para candidatos.
            </p>
          </div>
          <div>
            <img
              className={styles.imagen}
              src="/img/nosotros.jpg"
              alt="Equipo TalentLink"
            />
          </div>
        </div>

        {/* Misión y Visión */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.subtitulo}>Misión</h3>
            <p>
              Conectar talento con oportunidades, ofreciendo un servicio ágil y
              confiable de tercerización de empleo que impulse el desarrollo
              personal y organizacional. Buscamos ser un puente que facilite la
              empleabilidad y la eficiencia empresarial.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.subtitulo}>Visión</h3>
            <p>
              Ser la empresa líder en tercerización de empleo en Latinoamérica,
              reconocida por su innovación, calidad de servicio y compromiso con
              el crecimiento humano y profesional de las personas.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className={styles.valoresSection}>
          <h3 className={styles.subtitulo}>Nuestros valores</h3>
          <div className={styles.valores}>
            <div className={styles.valoresCard}>
              <span className={styles.emoji}>🤝</span>
              <h4>Compromiso</h4>
              <p>
                Brindamos un servicio responsable y cercano, cuidando tanto a
                nuestros clientes como a los talentos que confían en nosotros.
              </p>
            </div>
            <div className={styles.valoresCard}>
              <span className={styles.emoji}>🌱</span>
              <h4>Crecimiento</h4>
              <p>
                Promovemos el desarrollo profesional de las personas y el
                crecimiento sostenible de las organizaciones.
              </p>
            </div>
            <div className={styles.valoresCard}>
              <span className={styles.emoji}>💡</span>
              <h4>Innovación</h4>
              <p>
                Aplicamos nuevas ideas y herramientas digitales para optimizar
                los procesos de selección y tercerización de empleo.
              </p>
            </div>
          </div>
        </div>

        {/* Nuestro equipo */}
        <div className={styles.team}>
          <h3 className={styles.subtitulo}>Nuestro equipo</h3>
          <p className={styles.teamTexto}>
            Contamos con un equipo multidisciplinario de profesionales apasionados
            por conectar personas con oportunidades laborales. Nuestra fortaleza
            está en la diversidad, la experiencia y la dedicación de cada uno de
            nuestros colaboradores.
          </p>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <img src="/img/persona4.jpg" alt="Integrante 1" />
              <h4>Natalie Portman</h4>
              <p>Directora de RRHH</p>
              <p className={styles.descripcion}>
                 Con más de 10 años de experiencia en gestión de talento humano, lidera el área de recursos humanos fomentando un ambiente laboral inclusivo y motivador.
              </p>
            </div>
            <div className={styles.teamCard}>
              <img src="/img/persona2.jpg" alt="Integrante 2" />
              <h4>Leonardo DiCaprio</h4>
              <p>Líder de Selección</p>
              <p className={styles.descripcion}>
                 Especialista en reclutamiento y formación de equipos de alto rendimiento. Apasionado por conectar a las personas con su propósito profesional.
              </p>
            </div>
            <div className={styles.teamCard}>
              <img src="/img/persona3.jpg" alt="Integrante 3" />
              <h4>Angelina Jolie</h4>
              <p>Coordinadora de Proyectos</p>
              <p className={styles.descripcion}>
                Coordina los proyectos estratégicos de la empresa con enfoque en innovación, comunicación efectiva y trabajo colaborativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}




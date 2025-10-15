import styles from "./servicios.module.css";
import Header from "../components/Header/Header";
import Tarjeta from "../components/Targeta/Tarjeta";


export default function Servicios() {
  return (
    <>
    <Header
      title="Conoce nuestros servicios"
      subtitle="Ayudamos a empresas a encontrar personal y a profesionales a avanzar en su carrera."
      ctaText="Ver servicios"
      ctaLink = "#servicios"
      bgImage="/img/headerinicio.jpg"
    />
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <h2 className={styles.titulo}>Nuestros Servicios</h2>
        <p className={styles.subtitulo}>
          En TalentLink brindamos soluciones integrales en recursos humanos. 
          Ayudamos tanto a empresas como a candidatos a encontrar el mejor 
          camino para crecer y desarrollarse en el mundo laboral.
        </p>

        <div className={styles.grid}>
          <Tarjeta imagen="/img/servicio1.jpg"
                   titulo= "Selección de personal"
                   texto= "Llevamos adelante un proceso riguroso de búsqueda y evaluación para identificar a los candidatos que mejor se ajustan a las necesidades de cada puesto. Desde perfiles administrativos hasta ejecutivos y mandos medios."
          />

          <Tarjeta imagen="/img/servicio2.jpg"
                   titulo="Tercerización de empleo"
                   texto= "Nos encargamos de la contratación, administración y gestión de los colaboradores. De esta forma, las empresas pueden enfocarse en su negocio principal mientras nosotros nos ocupamos del talento humano."
          />

          <Tarjeta imagen="/img/servicio3.jpg"
                   titulo="Capacitación laboral"
                   texto= "Ofrecemos programas de capacitación a medida para potenciar las habilidades de los colaboradores. Desde talleres de liderazgo y comunicación hasta cursos técnicos y de actualización profesional."
          />

          <Tarjeta imagen="/img/servicio4.jpg"
                   titulo="Consultoría en RRHH"
                   texto= "Acompañamos a las empresas en el diseño e implementación de políticas de recursos humanos, gestión de clima laboral y desarrollo organizacional, aportando nuestra experiencia y visión estratégica."
          />

          <Tarjeta imagen="/img/servicio5.jpg"
                   titulo= "Reclutamiento IT"
                   texto= "Contamos con un área enfocada en la búsqueda de perfiles tecnológicos. Conocemos las demandas del sector y acercamos candidatos con conocimientos en programación, desarrollo, análisis de datos y más."
          />

        </div>
      </div>
    </section>
    </>
  );
}

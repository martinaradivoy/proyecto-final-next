import styles from "./tarjeta.module.css"

export default function Tarjeta({imagen, titulo, texto}) {
   return (
    <article className={styles.card}>
    <img
      src={imagen}
      alt={titulo}
      className={styles.imagen}
    />
    <h3 className={styles.cardTitulo}>{titulo}</h3>
    <p className={styles.texto}>{texto}</p>
  </article>
   );
}
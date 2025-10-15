import styles from "./header.module.css";
import Link from "next/link";

export default function Header({
  title = "Talento Terciarizado",
  subtitle = "Conectamos talento con oportunidades.",
  bgImage = "/img/headerinicio.jpg",
  showContent = true,
  // Compatibilidad:
  ctaText = "Ver Servicios",
  ctaLink = "#servicios",
  buttons = null, // si se pasa, se usan estos botones
}) {
  // Si no se pasa 'buttons', usamos el antiguo CTA
  const headerButtons = buttons && buttons.length > 0 ? buttons : [{ text: ctaText, link: ctaLink }];

  return (
    <header
      className={styles.imgParallax}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay para blur */}
      <div className={styles.overlay}></div>

      {showContent && (
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-gray-200 mb-6">{subtitle}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {headerButtons.map((btn, index) => (
                <Link key={index} href={btn.link} className={styles.button}>
                  {btn.text}
                </Link> //Recorre el arreglo con map
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

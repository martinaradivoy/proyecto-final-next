import './globals.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'TalenLink',
  description: 'Empresa TalentLink',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      </head>
      <body>
        <Nav />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  )
}


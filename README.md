# TalentLink

Plataforma web desarrollada para conectar talento profesional con oportunidades laborales.

Este proyecto fue realizado como una aplicación full stack utilizando Next.js, incorporando frontend, backend, base de datos PostgreSQL y envío de emails.

## 🚀 Tecnologías utilizadas

- Next.js (App Router)
- React
- JavaScript
- CSS Modules
- Prisma ORM
- PostgreSQL con Neon
- Resend para envío de emails
- Vercel para deployment

## ✨ Funcionalidades actuales

- Página institucional
- Sección de servicios
- Página de contacto
- Formulario de contacto funcional
- API backend con Route Handlers de Next.js
- Validación de datos
- Persistencia de mensajes en base de datos PostgreSQL
- Envío automático de emails mediante Resend

## 📁 Estructura del proyecto

```text
app/
├── api/
│   └── contacto/
│       └── route.js
├── contacto/
│   ├── page.jsx
│   └── contacto.module.css

lib/
├── prisma.js
├── email/
│   └── resend.js
└── validators/
    └── contacto.js

prisma/
├── schema.prisma
└── migrations/
```

## ⚙️ Instalación y configuración local

### Clonar el repositorio

```bash
git clone https://github.com/martinaradivoy/proyecto-final-next.git
```

### Ingresar al proyecto

```bash
cd proyecto-final-next
```

### Instalar dependencias

```bash
npm install
```

### Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
DATABASE_URL=
RESEND_API_KEY=
```

### Configuración de base de datos

Ejecutar las migraciones:

```bash
npx prisma migrate dev
```

### Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

## 🗄️ Base de datos

El proyecto utiliza Prisma ORM para la comunicación con PostgreSQL.

Las migraciones se encuentran dentro de:

```text
prisma/migrations
```

Para aplicar migraciones en producción:

```bash
npx prisma migrate deploy
```

## 📧 Servicio de emails

El envío de emails se realiza mediante Resend.

Variable necesaria:

```env
RESEND_API_KEY=
```

## 🌎 Deploy

La aplicación está desplegada utilizando Vercel.

Variables de entorno necesarias en producción:

```env
DATABASE_URL=
RESEND_API_KEY=
```

## 🔒 Seguridad

- Las variables sensibles se manejan mediante variables de entorno.
- Las claves privadas no se almacenan dentro del repositorio.
- La conexión con la base de datos se realiza mediante Prisma ORM.

## 🔮 Próximas mejoras

- Sistema de autenticación de usuarios.
- Perfiles de candidatos y empresas.
- Panel administrativo.
- Gestión de postulaciones.
- Notificaciones internas.

## 👩‍💻 Autora

Martina Radivoy

Proyecto desarrollado como aplicación full stack con Next.js.

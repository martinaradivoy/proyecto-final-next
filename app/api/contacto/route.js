import { contactoSchema } from "@/lib/validators/contacto";
import { resend } from "@/lib/email/resend";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
try {
const body = await req.json();


const result = contactoSchema.safeParse(body);

if (!result.success) {
  return Response.json(
    {
      ok: false,
      error: "Datos inválidos",
      details: result.error.issues,
    },
    { status: 400 }
  );
}

const data = result.data;

await prisma.contactMessage.create({
  data: {
    nombre: data.nombre,
    email: data.email,
    telefono: data.telefono,
    mensaje: data.mensaje,
    tipo: data.tipo,
  },
});

await resend.emails.send({
  from: "TalentLink <onboarding@resend.dev>",
  to: "martiiradivoy@gmail.com",
  subject: `Nuevo contacto (${data.tipo})`,
  html: `
    <h2>Nuevo mensaje desde TalentLink</h2>

    <p><strong>Nombre:</strong> ${data.nombre}</p>

    <p><strong>Email:</strong> ${data.email}</p>

    <p><strong>Teléfono:</strong> ${data.telefono}</p>

    <p><strong>Tipo:</strong> ${data.tipo}</p>

    <p><strong>Mensaje:</strong></p>

    <p>${data.mensaje}</p>
  `,
});

// Honeypot anti spam
if (data.website) {
  return Response.json(
    {
      ok: true,
      message: "Mensaje recibido",
    },
    { status: 200 }
  );
}

console.log({
  timestamp: new Date().toISOString(),
  tipo: data.tipo,
  nombre: data.nombre,
  email: data.email,
  telefono: data.telefono,
});

// Acá después vamos a:
// 1. Enviar email con Resend
// 2. Guardar en PostgreSQL

return Response.json(
  {
    ok: true,
    message: "Mensaje enviado correctamente",
  },
  { status: 200 }
);


} catch (error) {
console.error("Error API contacto:", error);


return Response.json(
  {
    ok: false,
    error: "Error interno del servidor",
  },
  { status: 500 }
);


}
}


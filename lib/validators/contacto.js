import { z } from "zod";

export const contactoSchema = z.object({
nombre: z
.string()
.min(2, "El nombre es muy corto")
.max(100, "El nombre es demasiado largo"),

email: z
.string()
.email("Email inválido"),

telefono: z
.string()
.min(6, "Teléfono muy corto")
.max(20, "Teléfono muy largo")
.regex(/^[0-9+\s()-]+$/, "Teléfono inválido"),

mensaje: z
.string()
.min(10, "El mensaje es muy corto")
.max(1000, "El mensaje es demasiado largo"),

tipo: z.string().optional(),

// Honeypot anti bots
website: z.string().optional(),
});

import emailjs from "@emailjs/browser";
import {
  buildEmailJsTemplateParams,
  CONTACT_EMAIL,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  assertEmailJsPublicKey,
  getEmailJsSendOptions,
} from "@/config/contact";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const HONEYPOT_FIELD_NAME = "company";

export function isHoneypotSubmission(form: HTMLFormElement): boolean {
  const value = String(
    new FormData(form).get(HONEYPOT_FIELD_NAME) ?? "",
  ).trim();
  return value.length > 0;
}

export function readContactFormData(form: HTMLFormElement): ContactFormData {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    message: String(data.get("message") ?? ""),
  };
}

export function assertEmailJsConfig(): void {
  assertEmailJsPublicKey();

  const missing = [
    !CONTACT_EMAIL && "NEXT_PUBLIC_CONTACT_EMAIL",
    !EMAILJS_SERVICE_ID && "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
    !EMAILJS_TEMPLATE_ID && "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new Error(
      `EmailJS no está configurado. Faltan: ${missing.join(", ")}`,
    );
  }
}

export function getEmailJsErrorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "text" in error) {
    const text = String((error as { text?: string }).text ?? "").trim();
    if (text) {
      return text;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Error desconocido al enviar el formulario.";
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<void> {
  assertEmailJsConfig();

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    buildEmailJsTemplateParams(data),
    getEmailJsSendOptions(),
  );
}

export { CONTACT_EMAIL };

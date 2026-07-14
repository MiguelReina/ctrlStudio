import {
  CONTACT_EMAIL,
  CONTACT_FORM_ENDPOINT,
  WEB3FORMS_ACCESS_KEY,
} from "@/config/contact";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function readContactFormData(form: HTMLFormElement): ContactFormData {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    message: String(data.get("message") ?? ""),
  };
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<void> {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: data.name,
      email: data.email,
      message: data.message,
      replyto: data.email,
      from_name: "CTRL Studio",
      subject: `Nuevo mensaje de ${data.name} - CTRL Studio`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Contact form request failed (${response.status})`);
  }

  const result = (await response.json()) as {
    success?: boolean | string;
    message?: string;
  };

  if (result.success !== true && result.success !== "true") {
    throw new Error(result.message ?? "Contact form submission failed");
  }
}

export { CONTACT_EMAIL };

function envOrDefault(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export const CONTACT_EMAIL = envOrDefault(
  process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  "miguel_rg_esteban@hotmail.com",
);

export const EMAILJS_PUBLIC_KEY = envOrDefault(
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  "1uC23HAf77CC_ppOm",
);

export const EMAILJS_SERVICE_ID = envOrDefault(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  "service_9lu9o7h",
);

export const EMAILJS_TEMPLATE_ID = envOrDefault(
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  "template_2neha4j",
);

/** Minimum wait between submissions from the same browser (EmailJS limitRate). */
export const EMAILJS_RATE_LIMIT_MS = 10_000;

/**
 * EmailJS service (service_9lu9o7h):
 * - Provider: Outlook.com (Personal) — compatible with @hotmail.com
 * - Dashboard: Email Services → Outlook → Connect account
 * - Account: miguel_rg_esteban@hotmail.com
 * - If Microsoft 2FA is enabled, use an App Password during connection
 * - Assign this service in template_2neha4j settings
 */
export const EMAILJS_SERVICE_PROVIDER = "Outlook.com (Personal)";

/**
 * EmailJS template settings (template_2neha4j):
 * - To Email:    {{to_email}}
 * - Reply-To:    {{reply_to}}
 * - Subject:     {{subject}}
 * - Content:     {{name}}, {{email}}, {{message}}
 */
export const EMAILJS_TEMPLATE_FIELDS = [
  "to_email",
  "reply_to",
  "subject",
  "name",
  "email",
  "message",
] as const;

export type EmailJsTemplateParams = {
  to_email: string;
  reply_to: string;
  subject: string;
  name: string;
  email: string;
  message: string;
};

export function buildEmailJsTemplateParams(
  data: Pick<EmailJsTemplateParams, "name" | "email" | "message">,
): EmailJsTemplateParams {
  return {
    to_email: CONTACT_EMAIL,
    reply_to: data.email,
    subject: `Nuevo mensaje de ${data.name} - CTRL Studio`,
    name: data.name,
    email: data.email,
    message: data.message,
  };
}

export function getEmailJsConfigStatus(): {
  contactEmail: string;
  serviceId: string;
  serviceProvider: string;
  templateId: string;
  hasPublicKey: boolean;
  rateLimitMs: number;
} {
  return {
    contactEmail: CONTACT_EMAIL,
    serviceId: EMAILJS_SERVICE_ID,
    serviceProvider: EMAILJS_SERVICE_PROVIDER,
    templateId: EMAILJS_TEMPLATE_ID,
    hasPublicKey: Boolean(EMAILJS_PUBLIC_KEY),
    rateLimitMs: EMAILJS_RATE_LIMIT_MS,
  };
}

export function assertEmailJsPublicKey(): void {
  if (process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY?.trim()) {
    throw new Error(
      "La Private Key de EmailJS no debe exponerse en el cliente.",
    );
  }

  if (!EMAILJS_PUBLIC_KEY) {
    throw new Error("Falta la Public Key de EmailJS.");
  }
}

export function getEmailJsSendOptions() {
  return {
    publicKey: EMAILJS_PUBLIC_KEY,
    limitRate: {
      id: "ctrlstudio-contact-form",
      throttle: EMAILJS_RATE_LIMIT_MS,
    },
  };
}

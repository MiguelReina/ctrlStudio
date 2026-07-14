import { describe, expect, it } from "vitest";
import {
  assertEmailJsPublicKey,
  buildEmailJsTemplateParams,
  CONTACT_EMAIL,
  EMAILJS_RATE_LIMIT_MS,
  EMAILJS_SERVICE_PROVIDER,
  EMAILJS_TEMPLATE_FIELDS,
  getEmailJsConfigStatus,
  getEmailJsSendOptions,
} from "@/config/contact";

describe("buildEmailJsTemplateParams", () => {
  it("builds the params expected by the EmailJS template", () => {
    expect(
      buildEmailJsTemplateParams({
        name: "Ana",
        email: "ana@example.com",
        message: "Hola",
      }),
    ).toEqual({
      to_email: CONTACT_EMAIL,
      reply_to: "ana@example.com",
      subject: "Nuevo mensaje de Ana - CTRL Studio",
      name: "Ana",
      email: "ana@example.com",
      message: "Hola",
    });
  });

  it("documents the template fields required in EmailJS", () => {
    expect(EMAILJS_TEMPLATE_FIELDS).toEqual([
      "to_email",
      "reply_to",
      "subject",
      "name",
      "email",
      "message",
    ]);
  });
});

describe("getEmailJsConfigStatus", () => {
  it("exposes the Outlook service configuration", () => {
    expect(getEmailJsConfigStatus()).toEqual({
      contactEmail: CONTACT_EMAIL,
      serviceId: "service_9lu9o7h",
      serviceProvider: EMAILJS_SERVICE_PROVIDER,
      templateId: "template_2neha4j",
      hasPublicKey: true,
      rateLimitMs: EMAILJS_RATE_LIMIT_MS,
    });
  });
});

describe("getEmailJsSendOptions", () => {
  it("uses the public key and client-side rate limiting", () => {
    expect(getEmailJsSendOptions()).toEqual({
      publicKey: "1uC23HAf77CC_ppOm",
      limitRate: {
        id: "ctrlstudio-contact-form",
        throttle: EMAILJS_RATE_LIMIT_MS,
      },
    });
  });
});

describe("assertEmailJsPublicKey", () => {
  it("does not throw when only the public key is configured", () => {
    expect(() => assertEmailJsPublicKey()).not.toThrow();
  });
});

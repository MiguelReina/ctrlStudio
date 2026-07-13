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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnqoyq";

export interface FormspreePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendFormspree(payload: FormspreePayload): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("FORMSPREE_SEND_FAILED");
  }
}

export type BaseFormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function validateBaseForm(data: {
  name: string;
  email: string;
  message: string;
}): BaseFormErrors {
  const errors: BaseFormErrors = {};

  if (!data.name.trim()) errors.name = "Nome é obrigatório.";

  if (!data.email.trim()) errors.email = "E-mail é obrigatório.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!data.message.trim()) errors.message = "Mensagem é obrigatória.";

  return errors;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnqoyq";
const REQUEST_TIMEOUT_MS = 15000;

export interface FormspreePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendFormspree(payload: FormspreePayload): Promise<void> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  /** Formspree usa `_subject` no assunto do e-mail; mantemos `subject` no payload pedido. */
  const body = JSON.stringify({
    ...payload,
    _subject: payload.subject,
    _replyto: payload.email,
  });

  let response: Response;

  try {
    response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body,
      signal: controller.signal,
    });
  } catch {
    throw new Error("FORMSPREE_SEND_FAILED");
  } finally {
    clearTimeout(timeoutId);
  }

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

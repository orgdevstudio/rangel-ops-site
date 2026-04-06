"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";
import { sendFormspree, validateBaseForm } from "@/lib/formspree";

type FormErrors = {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
  submit?: string;
};

export default function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (data: Record<string, string>): FormErrors => {
    const baseErrors = validateBaseForm({
      name: data.nome ?? "",
      email: data.email ?? "",
      message: data.mensagem ?? "",
    });

    const err: FormErrors = {
      nome: baseErrors.name,
      email: baseErrors.email,
      mensagem: baseErrors.message,
    };

    if (!data.assunto?.trim()) {
      err.assunto = "Assunto é obrigatório.";
    }

    return err;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      nome: String(formData.get("nome") ?? ""),
      email: String(formData.get("email") ?? ""),
      assunto: String(formData.get("assunto") ?? ""),
      mensagem: String(formData.get("mensagem") ?? ""),
    };

    const err = validate(data);
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      await sendFormspree({
        name: data.nome.trim(),
        email: data.email.trim(),
        subject: `Contato - ${data.assunto}`,
        message: data.mensagem.trim(),
      });

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrors({
        submit: "Não foi possível enviar, tente novamente",
      });
    }
  };

  const formContent =
    status === "success" ? (
      <div
        className="rounded-xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-medium text-white leading-snug">
          Mensagem enviada com sucesso.
        </p>
        <p className="mt-3 text-[#94a3b8]/90 text-sm leading-[1.6]">
          Nossa equipe retornará em até 24 horas úteis.
        </p>
        <Link href="/" className="mt-6 inline-block">
          <Button variant="outline" size="sm">
            Voltar ao início
          </Button>
        </Link>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-white"
          >
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-[#94a3b8]/60 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50"
            placeholder="Seu nome completo"
            disabled={status === "submitting"}
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "nome-error" : undefined}
          />
          {errors.nome && (
            <p id="nome-error" className="mt-1 text-sm text-red-400">
              {errors.nome}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            E-mail corporativo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-[#94a3b8]/60 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50"
            placeholder="seu@empresa.com"
            disabled={status === "submitting"}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="assunto"
            className="block text-sm font-medium text-white"
          >
            Assunto
          </label>
          <select
            id="assunto"
            name="assunto"
            required
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50 [&>option]:bg-[#0A1624]"
            disabled={status === "submitting"}
            aria-invalid={!!errors.assunto}
            aria-describedby={errors.assunto ? "assunto-error" : undefined}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione o assunto
            </option>
            <option value="Falar com especialista">Falar com especialista</option>
            <option value="Dúvida comercial">Dúvida comercial</option>
            <option value="Suporte técnico">Suporte técnico</option>
            <option value="Parceria">Parceria</option>
            <option value="Outros">Outros</option>
          </select>
          {errors.assunto && (
            <p id="assunto-error" className="mt-1 text-sm text-red-400">
              {errors.assunto}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="mensagem"
            className="block text-sm font-medium text-white"
          >
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-[#94a3b8]/60 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50"
            placeholder="Conte brevemente sua necessidade ou dúvida."
            disabled={status === "submitting"}
            aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
          />
          {errors.mensagem && (
            <p id="mensagem-error" className="mt-1 text-sm text-red-400">
              {errors.mensagem}
            </p>
          )}
        </div>
        {status === "error" && errors.submit && (
          <div
            className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3"
            role="alert"
            aria-live="polite"
          >
            <p className="text-sm text-red-300">{errors.submit}</p>
          </div>
        )}
        <div className="flex flex-col gap-3 sm:flex-row-reverse sm:justify-center">
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto"
          >
            {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
          </Button>
          <Link href="/" className="block sm:self-center">
            <Button
              type="button"
              variant="outline"
              size="md"
              className="w-full sm:w-auto border-white/20 text-[#94a3b8] hover:bg-white/5 hover:text-white"
            >
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    );

  return (
    <Section variant="default" background="default">
      <Container size="xl">
        <div className="mx-auto max-w-xl">
          {/* Headline mínima: foco no formulário */}
          <div className="text-center mb-12 mt-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.2]">
              Fale conosco
            </h1>
            <p className="mt-6 text-sm text-[#94a3b8]/75 leading-[1.6]">
              Resposta em até 24h úteis.
            </p>
          </div>

          {/* Formulário como centro absoluto */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 sm:p-10">
            {formContent}
          </div>

          {/* Ações secundárias discretas abaixo do form */}
          <div className="mt-10 flex flex-col items-center gap-6 text-center">
            <p className="text-xs text-[#94a3b8]/70">
              Ou envie direto:{" "}
              <a
                href="mailto:support@rangelops.com"
                className="font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:underline"
              >
                support@rangelops.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

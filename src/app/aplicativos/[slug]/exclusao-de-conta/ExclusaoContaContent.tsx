"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, Container, Button } from "@/components/ui";

type FormErrors = {
  email?: string;
};

export function ExclusaoContaContent() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (data: { email: string }): FormErrors => {
    const err: FormErrors = {};
    if (!data.email?.trim()) err.email = "E-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      err.email = "Informe um e-mail válido.";
    }
    return err;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: (form.email as HTMLInputElement).value,
      tipo: (form.tipo as HTMLSelectElement).value,
      descricao: (form.descricao as HTMLTextAreaElement).value,
    };

    const err = validate(data);
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  const formContent =
    status === "success" ? (
      <div
        className="rounded-xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-medium text-white leading-snug">
          Solicitação recebida com sucesso.
        </p>
        <p className="mt-3 text-[#94a3b8]/90 text-sm leading-[1.6]">
          Nossa equipe processará sua solicitação em até 5 dias úteis. Você
          receberá uma confirmação por e-mail.
        </p>
        <Link href="/aplicativos/sellerflow" className="mt-6 inline-block">
          <Button variant="outline" size="sm">
            Voltar ao SellerFlow
          </Button>
        </Link>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            E-mail da conta <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-[#94a3b8]/60 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50"
            placeholder="seu@email.com"
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
          <label htmlFor="tipo" className="block text-sm font-medium text-white">
            Tipo de solicitação <span className="text-red-400">*</span>
          </label>
          <select
            id="tipo"
            name="tipo"
            required
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50 [&>option]:bg-[#0A1624]"
            disabled={status === "submitting"}
          >
            <option value="">Selecione uma opção</option>
            <option value="conta-completa">
              Excluir minha conta completa
            </option>
            <option value="dados-especificos">
              Solicitar exclusão de dados específicos
            </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="descricao"
            className="block text-sm font-medium text-white"
          >
            Descrição <span className="text-[#94a3b8]/70">(opcional)</span>
          </label>
          <textarea
            id="descricao"
            name="descricao"
            rows={4}
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-[#94a3b8]/60 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50"
            placeholder="Descreva os dados específicos que deseja excluir ou forneça informações adicionais."
            disabled={status === "submitting"}
          />
        </div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Enviando..." : "Enviar solicitação"}
        </Button>
      </form>
    );

  return (
    <Section variant="default" background="default">
      <Container size="xl">
        <article className="mx-auto max-w-3xl pb-24 pt-16">
          <Link
            href="/aplicativos/sellerflow"
            className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
          >
            ← Voltar ao SellerFlow
          </Link>

          <header className="mt-12">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.2]">
              Exclusão de conta e dados
            </h1>
            <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.65]">
              O SellerFlow está em conformidade com a Lei Geral de Proteção de
              Dados (LGPD) e com as exigências da Google Play. Você tem o direito
              de solicitar a exclusão da sua conta e dos dados associados a ela.
            </p>
          </header>

          <div className="mt-14 space-y-10">
            <div
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
              style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Exclusão pelo aplicativo
                  </h2>
                  <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                    Se você possui acesso ao SellerFlow instalado no seu
                    dispositivo, pode excluir sua conta diretamente pelo
                    aplicativo. O processo é imediato e garante a remoção dos
                    dados vinculados à sua conta.
                  </p>
                  <h3 className="mt-6 text-base font-semibold text-white">
                    Passos para exclusão no app
                  </h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-6 text-base text-[#94a3b8]/90 leading-[1.75]">
                    <li>Abra o aplicativo SellerFlow</li>
                    <li>Acesse o menu de configurações ou perfil</li>
                    <li>Selecione a opção &quot;Excluir conta&quot;</li>
                    <li>Confirme a exclusão quando solicitado</li>
                  </ol>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
              style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Dados excluídos
                  </h2>
                  <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                    Ao solicitar a exclusão da conta, os seguintes dados são
                    removidos de nossos sistemas:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[#94a3b8]/90 leading-[1.75]">
                    <li>Dados de cadastro e autenticação (e-mail, nome, foto de perfil)</li>
                    <li>Informações do perfil do usuário</li>
                    <li>Dados da loja (nome, logotipo)</li>
                    <li>Metadados de importação de planilhas</li>
                    <li>Histórico de uso vinculado à conta</li>
                  </ul>
                  <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                    Os dados armazenados localmente no dispositivo permanecem até
                    que o usuário desinstale o aplicativo ou realize a limpeza
                    dos dados do app nas configurações do sistema.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
              style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Sem acesso ao aplicativo
                  </h2>
                  <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                    Caso você não tenha acesso ao aplicativo (por exemplo, após
                    troca de dispositivo ou desinstalação), pode solicitar a
                    exclusão da conta e dos dados por meio do formulário abaixo
                    ou diretamente pelo e-mail de suporte.
                  </p>
                  <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                    A solicitação será processada em até 5 dias úteis. Você
                    receberá uma confirmação por e-mail quando a exclusão for
                    concluída.
                  </p>
                  <a
                    href="mailto:support@rangelops.com"
                    className="mt-4 inline-block font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
                  >
                    support@rangelops.com
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
              style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2)" }}
            >
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Solicitar exclusão
              </h2>
              <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                Preencha o formulário abaixo para solicitar a exclusão da sua
                conta ou de dados específicos. Campos obrigatórios estão
                marcados com asterisco.
              </p>
              <div className="mt-8">{formContent}</div>
            </div>
          </div>

          <footer className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/aplicativos/sellerflow"
              className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
            >
              ← Voltar ao SellerFlow
            </Link>
          </footer>
        </article>
      </Container>
    </Section>
  );
}

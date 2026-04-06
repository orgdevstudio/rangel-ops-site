"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, Container, Button } from "@/components/ui";
import { sendFormspree, validateBaseForm } from "@/lib/formspree";

type FormErrors = {
  nome?: string;
  email?: string;
  tipo?: string;
  mensagem?: string;
  submit?: string;
};

export type ExclusaoAppSlug = "sellerflow" | "driveflow" | "civiflow";

const APP_NAMES: Record<ExclusaoAppSlug, string> = {
  sellerflow: "SellerFlow",
  driveflow: "DriveFlow",
  civiflow: "CiviFlow",
};

const REQUEST_TYPE_LABELS = {
  "conta-completa": "Excluir minha conta completa",
  "dados-especificos": "Solicitar exclusão de dados específicos",
} as const;

export function ExclusaoContaContent({ slug }: { slug: ExclusaoAppSlug }) {
  const appPath = `/aplicativos/${slug}`;
  const appName = APP_NAMES[slug];
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (data: {
    nome: string;
    email: string;
    tipo: string;
    mensagem: string;
  }): FormErrors => {
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

    if (!data.tipo?.trim()) {
      err.tipo = "Tipo de solicitação é obrigatório.";
    }

    return err;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      nome: (form.nome as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      tipo: (form.tipo as HTMLSelectElement).value,
      mensagem: (form.mensagem as HTMLTextAreaElement).value,
    };

    const err = validate(data);
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setStatus("submitting");

    const tipoLabel =
      REQUEST_TYPE_LABELS[data.tipo as keyof typeof REQUEST_TYPE_LABELS] ??
      data.tipo;
    const subject = `Exclusão de conta - ${appName} - ${tipoLabel}`;

    try {
      await sendFormspree({
        name: data.nome.trim(),
        email: data.email.trim(),
        subject,
        message: data.mensagem.trim(),
      });
      setStatus("success");
    } catch {
      setStatus("idle");
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
          Solicitação recebida com sucesso.
        </p>
        <p className="mt-3 text-[#94a3b8]/90 text-sm leading-[1.6]">
          Nossa equipe processará sua solicitação em até 5 dias úteis. Você
          receberá uma confirmação por e-mail.
        </p>
        <Link href={appPath} className="mt-6 inline-block">
          <Button variant="outline" size="sm">
            Voltar ao {appName}
          </Button>
        </Link>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-white"
          >
            Nome <span className="text-red-400">*</span>
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
            aria-invalid={!!errors.tipo}
            aria-describedby={errors.tipo ? "tipo-error" : undefined}
            defaultValue=""
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="conta-completa">
              Excluir minha conta completa
            </option>
            <option value="dados-especificos">
              Solicitar exclusão de dados específicos
            </option>
          </select>
          {errors.tipo && (
            <p id="tipo-error" className="mt-1 text-sm text-red-400">
              {errors.tipo}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="mensagem"
            className="block text-sm font-medium text-white"
          >
            Mensagem <span className="text-red-400">*</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            required
            className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-[#94a3b8]/60 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] disabled:opacity-50"
            placeholder="Descreva sua solicitação de exclusão."
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
        {errors.submit && (
          <p className="text-sm text-red-400" role="alert" aria-live="polite">
            {errors.submit}
          </p>
        )}
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
            href={appPath}
            className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
          >
            ← Voltar ao {appName}
          </Link>

          <header className="mt-12">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.2]">
              Exclusão de conta e dados
            </h1>
            <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.65]">
              {slug === "driveflow" ? (
                <>
                  O DriveFlow segue a Lei Geral de Proteção de Dados (LGPD) e as
                  exigências da Google Play. Você pode solicitar a exclusão da
                  sua conta e dos dados tratados em nossos sistemas. A conta usa
                  serviços em nuvem (como o Firebase) para autenticação e
                  informações vinculadas ao seu perfil; já parâmetros de
                  cálculo, histórico guardado só no celular e preferências locais
                  podem exigir um passo à parte no aparelho, como explicamos
                  nas seções abaixo.
                </>
              ) : slug === "civiflow" ? (
                <>
                  O CiviFlow segue a LGPD e as exigências da Google Play. A
                  exclusão da conta é permanente: depois de concluída nos
                  sistemas em nuvem (Firebase), não é possível recuperar os dados
                  associados ao seu login. Buscamos remover ou anonimizar todos
                  os registros vinculados à conta — obras, tarefas, materiais,
                  registros financeiros e demais informações sincronizadas. O que
                  ficar apenas no aparelho (rascunhos, cache ou fila offline)
                  precisa ser apagado por você com limpeza local ou desinstalação,
                  como explicamos nas seções abaixo.
                </>
              ) : (
                <>
                  O {appName} está em conformidade com a Lei Geral de Proteção
                  de Dados (LGPD) e com as exigências da Google Play. Você tem o
                  direito de solicitar a exclusão da sua conta e dos dados
                  associados a ela.
                </>
              )}
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
                    {slug === "driveflow" ? (
                      <>
                        Com o DriveFlow instalado e acesso à sua conta, você
                        pode pedir a exclusão direto no app. Esse fluxo encerra o
                        vínculo da sua conta com os serviços em nuvem utilizados
                        pelo aplicativo (incluindo autenticação e dados de
                        perfil mantidos em Firebase ou serviços equivalentes),
                        conforme previsto na versão em uso.
                      </>
                    ) : slug === "civiflow" ? (
                      <>
                        Com o CiviFlow instalado e acesso à sua conta, você pode
                        pedir a exclusão nas configurações do aplicativo. O
                        processo encerra de forma definitiva o vínculo da sua
                        conta com o Firebase e com os dados de obra guardados
                        em nuvem (obras, tarefas, materiais, registros
                        financeiros e anexos associados ao seu usuário), conforme
                        a versão em uso. Confirme somente se deseja apagar tudo de
                        forma irreversível na nuvem.
                      </>
                    ) : (
                      <>
                        Se você possui acesso ao SellerFlow instalado no seu
                        dispositivo, pode excluir sua conta diretamente pelo
                        aplicativo. O processo é imediato e garante a remoção dos
                        dados vinculados à sua conta.
                      </>
                    )}
                  </p>
                  {slug === "driveflow" && (
                    <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                      Depois de confirmar, aguarde a mensagem de conclusão, se
                      houver. Em seguida, se quiser apagar também o que ficou
                      só no aparelho (veja abaixo), use a limpeza de dados do aplicativo
                      nas configurações do Android ou desinstale o DriveFlow.
                    </p>
                  )}
                  {slug === "civiflow" && (
                    <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                      Depois de confirmar a exclusão na nuvem, se ainda houver
                      cópias no celular (rascunhos, cache, listas offline ou
                      registros não enviados), apague com{" "}
                      <strong className="font-medium text-white/90">
                        Configurações do Android → Apps → CiviFlow → Limpar dados
                      </strong>{" "}
                      ou desinstale o app — assim você remove também o que ficou
                      só no dispositivo.
                    </p>
                  )}
                  <h3 className="mt-6 text-base font-semibold text-white">
                    Passos para exclusão no app
                  </h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-6 text-base text-[#94a3b8]/90 leading-[1.75]">
                    <li>Abra o aplicativo {appName}</li>
                    <li>
                      {slug === "driveflow" || slug === "civiflow"
                        ? "Abra as configurações ou a área da sua conta / perfil"
                        : "Acesse o menu de configurações ou perfil"}
                    </li>
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
                  {slug === "driveflow" ? (
                    <>
                      <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                        A exclusão da conta afeta de forma distinta o que está na
                        nuvem e o que está só no seu celular. Em ambos os casos,
                        tratamos o pedido com base na LGPD e no direito
                        à eliminação dos dados quando aplicável.
                      </p>
                      <h3 className="mt-6 text-base font-semibold text-white">
                        Na nuvem (Firebase e serviços associados)
                      </h3>
                      <p className="mt-3 text-base text-[#94a3b8]/90 leading-[1.75]">
                        Ao excluir a conta pelo app ou pelo suporte, buscamos
                        remover ou anonimizar, nos sistemas que controlamos:
                      </p>
                      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[#94a3b8]/90 leading-[1.75]">
                        <li>
                          Dados de login e identificação da conta (por exemplo
                          e-mail vinculado ao Firebase Authentication)
                        </li>
                        <li>Nome, foto e demais dados de perfil guardados na nuvem</li>
                        <li>
                          Preferências e parâmetros de análise de corrida que
                          tenham sido sincronizados com a sua conta
                        </li>
                        <li>
                          Histórico e registros associados à conta nos bancos de
                          dados utilizados pelo DriveFlow, quando existirem
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-[#94a3b8]/75 leading-[1.65]">
                        Pode haver prazo curto de retenção em backups ou registros
                        técnicos exigidos por lei; nesses casos, os dados deixam
                        de ser usados para finalidade ativa e são eliminados
                        quando o backup expira.
                      </p>
                      <h3 className="mt-6 text-base font-semibold text-white">
                        No aparelho (dados locais)
                      </h3>
                      <p className="mt-3 text-base text-[#94a3b8]/90 leading-[1.75]">
                        Cálculos, caches, histórico recente e ajustes que ficaram
                        apenas na memória do dispositivo não são apagados
                        automaticamente pela exclusão da conta na nuvem. Para
                        remover tudo localmente, use{" "}
                        <strong className="font-medium text-white/90">
                          Configurações do Android → Apps → DriveFlow → Limpar
                          dados
                        </strong>{" "}
                        ou desinstale o aplicativo. Se você trocar de celular sem
                        limpar o app antigo, considere apagar os dados ou
                        desinstalar lá também.
                      </p>
                    </>
                  ) : slug === "civiflow" ? (
                    <>
                      <p className="mt-4 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#94a3b8]/95 leading-[1.65]">
                        Atenção: a exclusão da conta é{" "}
                        <span className="font-semibold text-white/95">
                          permanente
                        </span>
                        . Concluída a remoção nos servidores, não será possível
                        restaurar obras, tarefas, materiais, registros
                        financeiros nem outros dados ligados a essa conta na
                        nuvem.
                      </p>
                      <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                        Tratamos o pedido conforme a LGPD: na nuvem (Firebase e
                        serviços associados), buscamos eliminar ou anonimizar{" "}
                        <span className="font-medium text-white/90">
                          todos os dados vinculados à sua conta
                        </span>
                        . No aparelho, a limpeza depende de você, como detalhamos
                        a seguir.
                      </p>
                      <h3 className="mt-6 text-base font-semibold text-white">
                        Na nuvem (Firebase e serviços associados)
                      </h3>
                      <p className="mt-3 text-base text-[#94a3b8]/90 leading-[1.75]">
                        Ao excluir a conta pelo app ou pelo suporte, almejamos
                        remover ou anonimizar, entre outros:
                      </p>
                      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[#94a3b8]/90 leading-[1.75]">
                        <li>
                          Dados de login e identificação (por exemplo e-mail no
                          Firebase Authentication);
                        </li>
                        <li>Nome, foto e demais dados de perfil na nuvem;</li>
                        <li>
                          Cadastros de obras e projetos, tarefas e cronogramas
                          vinculados à conta;
                        </li>
                        <li>
                          Movimentações e saldos de materiais, listas e histórico
                          sincronizados;
                        </li>
                        <li>
                          Lançamentos e registros financeiros (custos, despesas
                          e valores associados à obra) mantidos no serviço;
                        </li>
                        <li>
                          Indicadores de progresso, medições e arquivos de obra
                          armazenados em nome da conta, quando aplicável.
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-[#94a3b8]/75 leading-[1.65]">
                        Pode haver prazo curto em backups ou registros técnicos
                        exigidos por lei; nesses casos, os dados deixam de ser
                        usados de forma ativa até expirarem os ciclos de
                        retenção.
                      </p>
                      <h3 className="mt-6 text-base font-semibold text-white">
                        No aparelho (dados locais)
                      </h3>
                      <p className="mt-3 text-base text-[#94a3b8]/90 leading-[1.75]">
                        Rascunhos, filas de sincronização, caches e cópias
                        offline de obras, tarefas, materiais ou lançamentos
                        financeiros não somem sozinhos só porque a conta foi
                        excluída na nuvem. Para apagar tudo do dispositivo, use{" "}
                        <strong className="font-medium text-white/90">
                          Configurações do Android → Apps → CiviFlow → Limpar
                          dados
                        </strong>{" "}
                        ou desinstale o aplicativo. Se usar outro celular com o
                        app antigo, repita a limpeza lá também.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                        Ao solicitar a exclusão da conta, os seguintes dados são
                        removidos de nossos sistemas:
                      </p>
                      <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[#94a3b8]/90 leading-[1.75]">
                        <li>
                          Dados de cadastro e autenticação (e-mail, nome, foto de
                          perfil)
                        </li>
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
                    </>
                  )}
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
                    {slug === "driveflow" || slug === "civiflow" ? (
                      <>
                        Se você não consegue abrir o {appName} (por exemplo
                        após trocar de aparelho ou perder o acesso), ainda pode
                        pedir a exclusão da conta e dos dados em nuvem pelo
                        formulário abaixo ou pelo e-mail de suporte. Use o mesmo
                        e-mail cadastrado na conta, para localizarmos seu registro
                        nos serviços Firebase.
                      </>
                    ) : (
                      <>
                        Caso você não tenha acesso ao aplicativo (por exemplo, após
                        troca de dispositivo ou desinstalação), pode solicitar a
                        exclusão da conta e dos dados por meio do formulário abaixo
                        ou diretamente pelo e-mail de suporte.
                      </>
                    )}
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
              <div className="mt-6 rounded-lg border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[#94a3b8]/80">
                  Assunto do envio
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Exclusão de conta - {appName}
                </p>
              </div>
              <p className="mt-4 text-base text-[#94a3b8]/90 leading-[1.75]">
                {slug === "civiflow" ? (
                  <>
                    Preencha o formulário para solicitar a exclusão da conta
                    (incluindo todos os dados em nuvem vinculados ao seu
                    e-mail) ou de dados específicos. Campos obrigatórios estão
                    marcados com asterisco. Para exclusão completa da conta, a
                    remoção na nuvem é definitiva; no celular, limpe os dados do
                    app ou desinstale além deste pedido.
                  </>
                ) : slug === "driveflow" ? (
                  <>
                    Preencha o formulário para solicitar a exclusão da conta
                    (incluindo dados em nuvem) ou de dados específicos. Campos
                    obrigatórios estão marcados com asterisco. Para dados que
                    existem só no celular, lembre-se de limpar o app ou
                    desinstalar no aparelho, além deste pedido.
                  </>
                ) : (
                  <>
                    Preencha o formulário abaixo para solicitar a exclusão da sua
                    conta ou de dados específicos. Campos obrigatórios estão
                    marcados com asterisco.
                  </>
                )}
              </p>
              <div className="mt-8">{formContent}</div>
            </div>
          </div>

          <footer className="mt-16 border-t border-white/10 pt-8">
            <Link
              href={appPath}
              className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
            >
              ← Voltar ao {appName}
            </Link>
          </footer>
        </article>
      </Container>
    </Section>
  );
}

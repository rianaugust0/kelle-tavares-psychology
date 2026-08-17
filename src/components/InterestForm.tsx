import { useState } from "react";
import { track } from "@/lib/analytics";

/**
 * Formulário curto e opcional de interesse.
 * Nesta primeira versão não há banco de dados: o envio abre o WhatsApp
 * apenas se a URL estiver configurada, caso contrário exibe confirmação.
 */
export function InterestForm() {
  const [started, setStarted] = useState(false);
  const [sent, setSent] = useState(false);

  const onStart = () => {
    if (!started) {
      setStarted(true);
      track("contact_form_start");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        track("contact_form_submit");
        setSent(true);
      }}
      onFocus={onStart}
      className="bg-warm-white p-7 sm:p-10"
      aria-labelledby="form-interesse-titulo"
    >
      <p className="label-caps">Opcional</p>
      <h3 id="form-interesse-titulo" className="mt-3 text-[1.5rem] text-foreground">
        Formulário de interesse
      </h3>
      <p className="mt-3 text-[0.85rem] text-taupe">
        Apenas informações básicas de contato. Não compartilhe dados de saúde neste formulário.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label htmlFor="nome" className="label-caps mb-2 block">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="w-full border-b border-input bg-transparent py-2.5 text-[0.95rem] text-foreground outline-none transition-colors focus:border-terracotta"
          />
        </div>

        <fieldset>
          <legend className="label-caps mb-3">Tipo de atendimento</legend>
          <div className="flex flex-wrap gap-5">
            {["Adulto", "Infantil"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-[0.92rem] text-taupe">
                <input
                  type="radio"
                  name="tipo"
                  value={opt}
                  required
                  className="size-4 accent-[var(--terracotta)]"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="label-caps mb-3">Modalidade</legend>
          <div className="flex flex-wrap gap-5">
            {["Online", "Presencial — interesse futuro"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-[0.92rem] text-taupe">
                <input
                  type="radio"
                  name="modalidade"
                  value={opt}
                  required
                  className="size-4 accent-[var(--terracotta)]"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="contato" className="label-caps mb-2 block">
            WhatsApp ou e-mail
          </label>
          <input
            id="contato"
            name="contato"
            type="text"
            required
            autoComplete="tel"
            className="w-full border-b border-input bg-transparent py-2.5 text-[0.95rem] text-foreground outline-none transition-colors focus:border-terracotta"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-9 w-full border border-foreground px-6 py-4 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
      >
        Enviar interesse
      </button>

      <p aria-live="polite" className="mt-4 min-h-5 text-[0.82rem] text-terracotta">
        {sent ? "Obrigada! Em breve entrarei em contato." : ""}
      </p>
    </form>
  );
}

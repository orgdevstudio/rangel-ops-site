/**
 * Utilitários compartilhados do projeto
 */

type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[];

/**
 * Combina classes condicionalmente com suporte a Tailwind
 * Filtra valores falsy e concatena strings de forma limpa
 */
export function cn(...inputs: ClassValue[]): string {
  const flatten = (arr: ClassValue[]): string[] => {
    return arr.flatMap((x) =>
      Array.isArray(x) ? flatten(x) : x != null && x !== false ? [String(x)] : []
    );
  };
  return flatten(inputs).filter(Boolean).join(" ").trim();
}

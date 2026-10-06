// Formatação de datas vindas da API (ISO 8601)
import { format, parseISO } from "date-fns";

/**
 * @param {string | null | undefined} value ex.: "2026-10-06" ou "2026-10-06T14:30:00"
 * @returns {string} ex.: "06/10/2026" (vazio se não houver valor)
 */
export function formatDate(value) {
  if (!value) return "";
  return format(parseISO(value), "dd/MM/yyyy");
}

/**
 * @param {string | null | undefined} value ex.: "2026-10-06T14:30:00"
 * @returns {string} ex.: "06/10/2026 14:30" (vazio se não houver valor)
 */
export function formatDateTime(value) {
  if (!value) return "";
  return format(parseISO(value), "dd/MM/yyyy HH:mm");
}

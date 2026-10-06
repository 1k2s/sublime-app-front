// Valores monetários chegam da API como string e só são formatados aqui
import Decimal from "decimal.js";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/**
 * @param {string | null | undefined} value 
 * @returns {string} 
 */
export function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  // A string com 2 casas preserva a precisão do Decimal na formatação
  return currencyFormatter.format(new Decimal(value).toFixed(2));
}

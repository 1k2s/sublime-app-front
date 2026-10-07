// Formatação de valores monetários (chegam da API como string)
import Decimal from "decimal.js";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// "1234.5" -> "R$ 1.234,50". Devolve "" para valor vazio ou inválido
export function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  try {
    return currencyFormatter.format(new Decimal(value).toFixed(2));
  } catch {
    return "";
  }
}

// Máscaras de exibição; para enviar à API, use onlyDigits

export function onlyDigits(value) {
  return String(value ?? "").replace(/\D/g, "");
}

// 000.000.000-00
export function maskCpf(value) {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// (00) 0000-0000 ou (00) 00000-0000
export function maskPhone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

// 00000-000
export function maskCep(value) {
  return onlyDigits(value)
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
}

// Máscaras de entrada: CPF, telefone e CEP

export function onlyDigits(value) {
  return String(value ?? "").replace(/\D/g, "");
}

// "12345678901" -> "123.456.789-01"
export function maskCpf(value) {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// "11987654321" -> "(11) 98765-4321" e "1132654321" -> "(11) 3265-4321"
export function maskPhone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  const prefixLength = digits.length === 11 ? 5 : 4;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 2 + prefixLength)}-${digits.slice(2 + prefixLength)}`;
}

// "01310100" -> "01310-100"
export function maskCep(value) {
  return onlyDigits(value)
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
}

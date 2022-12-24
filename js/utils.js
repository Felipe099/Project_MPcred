export function valorDaParcelaEmprestimo(valor, parcelas, juros) {
  let mult = valor * juros;
  let total = mult / parcelas;
  return total.toFixed(2);
}

export function valorTotalDoEmprestimo(valor, juros) {
  let total = valor * juros;
  return total.toFixed(2);
}

export function notANumber(value) {
  return isNaN(value == 0) || (value == '');
}
export function pluralizeRu(number, forms) {
  const n = Math.abs(number);
  const lastTwo = n % 100;
  const last = n % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return forms[2]; // множественное (товаров)
  }

  if (last === 1) {
    return forms[0]; // единственное (товар)
  }

  if (last >= 2 && last <= 4) {
    return forms[1]; // двойственное (товара)
  }

  return forms[2]; // множественное (товаров)
}

let nombres = [
  0,
  NaN,
  Infinity,
  -Infinity,
  42,
  3.14,
  Number.MAX_SAFE_INTEGER + 1,
  -0
];

for (let i = 0; i < nombres.length; i++) {
  let n = nombres[i];

  if (Number.isNaN(n)) {
    console.log(n + " -> INVALIDE");
  }
  else if (n === Infinity || n === -Infinity) {
    console.log(n + " -> INFINI");
  }
  else if (n === 0 && 1 / n === -Infinity) {
    console.log(n + " -> ZERO NEGATIF");
  }
  else if (Number.isInteger(n)) {
    if (Math.abs(n) <= Number.MAX_SAFE_INTEGER) {
      console.log(n + " -> ENTIER SUR");
    } else {
      console.log(n + " -> ENTIER HORS LIMITES");
    }
  }
  else {
    console.log(n + " -> DECIMAL");
  }
}
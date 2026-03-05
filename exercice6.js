let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let variables = [
  { nomVar: "nom", valeur: nom },
  { nomVar: "age", valeur: age },
  { nomVar: "ville", valeur: ville },
  { nomVar: "score", valeur: score },
  { nomVar: "actif", valeur: actif }
]

console.log("=== Partie A : nullish coalescing ?? ===")
for (let v of variables) {
  console.log(`${v.nomVar} ?? "valeur par défaut" -> ${v.valeur ?? "valeur par défaut"}`)
}

console.log("\n=== Partie B : OR logique || ===")
for (let v of variables) {
  console.log(`${v.nomVar} || "valeur par défaut" -> ${v.valeur || "valeur par défaut"}`)
}

console.log("\n=== Partie C : Comparaison ?? vs || ===")
for (let v of variables) {
  let resultatNullish = v.valeur ?? "valeur par défaut"
  let resultatOr = v.valeur || "valeur par défaut"
  let message = (resultatNullish === resultatOr) ? "même résultat" : "résultat différent"
  console.log(`${v.nomVar} : ?? et || -> ${message}`)
}
let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nom.trim()
if (nomCorrige === "") {
  nomCorrige = "Inconnu"
}

let ageNombre = parseInt(age)
let ageValide = (!Number.isNaN(ageNombre) && ageNombre > 0)

let indexArobase = email.indexOf("@")
let emailValide = false
if (indexArobase !== -1) {
  let indexPoint = email.indexOf(".", indexArobase)
  if (indexPoint !== -1) {
    emailValide = true
  }
}

let scoreNombre = parseInt(scoreJeu)
if (Number.isNaN(scoreNombre)) {
  scoreNombre = 0
}

let estAdminBool = (estAdmin === "true") ? true : false

let derniereConnexionCorrigee = derniereConnexion ?? "Jamais connecté"

let connexionsNombre = Number(nombreConnexions)
let connexionsAffiche = (connexionsNombre === 0) ? "Aucune connexion" : connexionsNombre

console.log("===== RAPPORT UTILISATEUR =====")
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')
console.log("age              : " + (ageValide ? ageNombre : "valeur invalide") + (ageValide ? " (valide)" : " (invalide)"))
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ')')
console.log("scoreJeu         : " + scoreNombre + " (extrait depuis \"" + scoreJeu + "\")")
console.log("estAdmin         : " + estAdminBool + " (attention : Boolean(\"false\") = true, conversion manuelle requise)")
console.log('derniereConnexion: "' + derniereConnexionCorrigee + '" (valeur par défaut via ??)')
console.log("nombreConnexions : \"" + connexionsAffiche + "\" (" + (connexionsNombre === 0 ? "0 après conversion" : "après conversion") + ")")
console.log("================================")
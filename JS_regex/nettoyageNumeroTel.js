const regexRemplace = /[\-.]+/; // Remplace "-" et "." par des espaces
const regexFormatValide = /^\+33[1-9]([ ]?[0-9]{2}){4}$/; // Format de numéro valide
const regexBloque = /[^0-9 +]/; // Tout sauf chiffre ou "+"
const span = document.querySelector("span"); // Élément DOM pour l'indication de validation
const tel = document.querySelector("#telephone"); // Entrée DOM pour le numéro de téléphone

tel.addEventListener("input", function () {
  let valeurInput = tel.value;//valeur saisie dans l'input
  console.log(valeurInput);
  let remplacement = valeurInput.replace(regexRemplace, " "); // Remplace "-" et "." par des espaces
  let blocage = remplacement.replace(regexBloque, ""); // Bloque la saisie de caractères non autorisés
  tel.value = blocage;
  
  if (regexFormatValide.test(blocage)) {
    span.textContent = "✅"; // Affiche une coche si le format est correct
    tel.style = "border:solid 2px #12a70a"; // Bordure verte si correct
  } else {
    span.textContent = "❌"; // Affiche une croix si le format est incorrect
    tel.style = ""; // Bordure par défaut si incorrect
  }
});

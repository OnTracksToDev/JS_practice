let colorChoice = prompt("saisir une couleur por favor").trim().toLowerCase();

switch (colorChoice) {
  case "bleu":
  case "cyan":
    alert( `${colorChoice}est la couleur du calme.`);
    break;
  case "or":
  case "jaune":
    alert(`${colorChoice}est la couleur de la chaleur`);
    break;
  case "bordeaux":
  case "rouge":
    alert(`${colorChoice}est la couleur de la passion`);
    break;

  default:
    alert(`${colorChoice} n'est pas une couleur primaire que nous reconnaissons`);
}

//saisie age utilisateur

let userAgePrompt = prompt("quel est votre age svp ? ");

//verif saisie age prompt
//age utilisateur .match(regex) pour recherchez uniquement les nombres dans la saisie utilisateur
let userAge = userAgePrompt.match(/[0-9]+/);
console.log(userAge);
if (userAge !== null && userAge.length > 0) { // on s'assure qu'il y a quelque chose
  //saisie est etudiant
  let isStudent = prompt("Etes-vous etudiants? Répondre oui ou non")
    .trim()
    .toLowerCase(); //trim(): retire les espaces, toLowercase: converti en minuscule
  if (isStudent !== null && isStudent !== "") { //on s'assure qu'il y a quelque chose

    //structure conditionelle
    if (userAge < 12) {
      alert("5€"); // tarif age inferieur a 12
    } else if ((userAge >= 12 && userAge < 18) || isStudent === "oui") {
      alert("7€"); //tarif age entre 12(inclus) et 18ans OU étudiant
    } else {
      alert("10€"); // les autres
    }
  } else {
    alert("veuillez préciser cette information.");
  }
} else {
  alert("Veuillez saisir votre age");
}

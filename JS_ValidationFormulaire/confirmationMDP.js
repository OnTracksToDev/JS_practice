//DOM variable selectionne les deux inputs
const inputs = document.querySelectorAll("input[type=password]");

//DOM element message a afficher
const indication = document.querySelector("#indication");

//Boucle parcourir chaque input
inputs.forEach(function (input) {
  input.addEventListener("change", function (event) {
    //ajout evenement sur chaque input
    event.preventDefault(); //
    const premierMDP = inputs[0].value; //valeur 1er input
    const deuxiemeMDP = inputs[1].value; //valeur 2eme input

    if (premierMDP === deuxiemeMDP) {
      //conditions valeur input sont egales
      indication.textContent = "Vous pouvez envoyer le questionnaire"; //affiche si vrai
      inputs[0].style = "border: solid green 2px";
      inputs[1].style = "border: solid green 2px";
    } else {
      indication.textContent = "Mots de passe non identiques"; //affiche si faux
      inputs[0].style = "border: solid red 2px";
      inputs[1].style = "border: solid red 2px";
    }
  });
});

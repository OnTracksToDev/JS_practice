//selection DOM balise body
const corp = document.querySelector("body");

//ajout event listener sur body
corp.addEventListener("keydown", function (e) {
  console.log(`Vous avez appuyez sur la touche ${e.key}`);//affiche la touche appuyée
 document.querySelector("#champ").textContent += e.key;// ajoute les touches appuyées dans le champ prevu
});

// //DOM bouton
// const monBouton = document.querySelector("#Mode");
// console.log(monBouton);

//DOM body
const body = document.querySelector("body");

//ajout evenement
Mode.addEventListener("click", function () {
  alert("Changement de mode"); //alerte
  console.log(body.style.backgroundColor);
  if (body.style.backgroundColor !== "rgb(60, 60, 60)") {
    //(couleur rgb car hexa ne fonctionne pas)
    body.style.backgroundColor = "#3c3c3c";
    body.style.color = "#ffffff";
    Mode.textContent = "Mode light";
  } else {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#3c3c3c";
    Mode.textContent = "Mode dark";
  }
});

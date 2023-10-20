//nouveau paragraphe
let newParagraphe = document.createElement("p");

//contenu paragraphe
newParagraphe.textContent = "Hello je suis le nouveau Paragraphe";

//classe paragraphe
newParagraphe.classList.add("bordure")

//paragraphe en gras
newParagraphe.style.fontWeight = "bold"


//modif classe "border"
newParagraphe.classList.remove("bordure");//suppression bordure
newParagraphe.classList.add("border"); //ajout border

console.log(newParagraphe.classList)

// //ajout paragraphe fin 
// let container = document.querySelector("body");
// container.appendChild(newParagraphe)

//ajout paragraphe apres 1er titre h2
//parent = body
const parent = document.querySelector('body')
//referent
const referent = document.querySelectorAll("h2")[1]
//ajout
parent.insertBefore(newParagraphe,referent);


//suppression paragraphe "texteEnCouleur"
const oldParagraphe = document.querySelector(".texteEnCouleur");
oldParagraphe.remove();
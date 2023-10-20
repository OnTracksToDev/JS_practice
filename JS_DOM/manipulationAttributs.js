//selection premier paragraphe
let firstParagraphe = document.querySelector("p");
console.log(firstParagraphe);//affichage

//modification du texte
firstParagraphe.textContent= "Texte modifié";

//ajout attribut id 
firstParagraphe.setAttribute("id", "monParagraphe");


//selection lien
let monLien = document.querySelector("a");

//mise a jour attribut
monLien.setAttribute("href", "http:/www.google.com");
console.log(monLien);//affichage

//structure conditionnelle
if(monLien.id=="monLien"){
monLien.removeAttribute("id")
}else {
    monLien.setAttribute("id")
}
// tableau films 

let filmPreferes = ["Soldat Ryan", "Gladiator", "Man on Fire", "Deja vu"]

//affiche Man on Fire
console.log(filmPreferes[2])

//aleatoire
let indiceAleatoire = Math.floor(Math.random() * filmPreferes.length);
let elementAleatoire = filmPreferes[indiceAleatoire];
console.log(elementAleatoire);

//afficher phrase
console.log(`Mon film favori dans cette liste est ${elementAleatoire}`)
//objet adresse
let adresse = {
    rue: "1,avenue Martin Luther King",
    ville: "Paris"
};

//phrase
let phrase = `J'habite ${adresse.rue} à ${adresse.ville}`;


//afficher phrase
console.log(phrase);

//BONUS

let phrase2= `Avant, j'habitais à Choisy le roi`;

//resultat
console.log(`${phrase}. ${phrase2}`)
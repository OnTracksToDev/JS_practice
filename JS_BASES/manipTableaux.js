//tableau classe
let groupe = ["Fabien","Khemara","Eroudini","Sabrina","Tim","Diego","Majdi","Shiomi","Yass","Oceane","Lucas","Roman","Omar","Andrea"];

//ajout une personne a la fin
groupe.push("Djamil");

//supprime une personne au debut
groupe.shift();

//affiche groupe dans la console
console.log(groupe);

//taille tableau
console.log(groupe.length)


let tableau2 = [1, 2, 3, 4, 5];
let elementAAjouter = 6;

// Ajouter l'élément à la troisième position
tableau2.splice(2, 0, elementAAjouter); // Le premier argument est l'index d'insertion, le deuxième argument est le nombre d'éléments à supprimer (0 dans ce cas), le troisième argument est l'élément à ajouter

console.log(tableau2); // [1, 2, 6, 3, 4, 5]

let tableau3 = [1, 2, 3, 4, 5];

// Supprimer le deuxième élément
tableau3.splice(1, 1); // Le premier argument est l'index de départ, le deuxième argument est le nombre d'éléments à supprimer

console.log(tableau3); // [1, 3, 4, 5]
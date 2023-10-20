//Fonction nommee
function salut (nom){ 
    return `Salut ${nom}!`//affiche console
}
console.log(salut('Bibou'));//affiche + appel fonction


//fonction anonyme
const shalom = function(nom){
    return `Shalom ${nom}!`//affiche console
}
console.log(shalom('Yoyo'))//affiche + appel fonction


//fonction flechee
const salam = (nom) => `Salam ${nom}!`

console.log(salam('Gluglu'))//affiche + appel fonction

//saisie age utilisateur
let userAge= prompt("Indiquez votre age SVP")

//structure conditionnelle
if (userAge>=12){
    alert("Vous pouvez vous inscrire.")//affiche si age superieur ou egale a 12
} else if (userAge<12){
    alert("Acces refusé. Vous devez avoir au moins 12 ans pour vous inscrire.")//affiche cas contraire
} else {
    alert("attention aux informations saisie")//erreur saisie
}1
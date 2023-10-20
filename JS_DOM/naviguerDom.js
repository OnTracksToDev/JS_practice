//selection liste
let liste = document.querySelector("ol");
console.log(liste);

//acces premier enfant
let premierEnfant = liste.firstElementChild;
console.log(premierEnfant);

//deuxieme enfant
let secondEnfant = premierEnfant.nextElementSibling;
console.log(secondEnfant);

//tous les element de la liste
let allListe = secondEnfant.parentNode;
console.log(allListe);

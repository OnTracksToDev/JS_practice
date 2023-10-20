
//objet information personnage
let spidey = {
    nom: "Parker",
    prenom:"Peter",
    age : 20
}
//affiche prenom 
console.log(spidey.prenom);
//ajout formation 
spidey.organisation = "Avengers";

//supprime age
delete spidey.age;
//affiche objet
console.log(spidey);


//parcour l'objet et affiche les proprietes et valeur sauf prenom
for (let propriete in spidey) {
    if (propriete !==  "prenom") {
        console.log(`La propriete est "${propriete}" la valeur est "${spidey[propriete]}"`);
        console.log(typeof propriete);
        
    }
}

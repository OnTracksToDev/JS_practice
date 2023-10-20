let myLink = document.querySelector("a");//selection balise <a>
myLink.classList.add("lienGoogle")// ajout classe 
console.log(myLink.classList)// affichage classe 

let liste = document.querySelectorAll("li");//selection all <li>
console.log(liste);//affichage liste


//TOOGLE MANUELLE
// for(let i=0 ; i<liste.length; i++){//boucle parcours liste li
//     if(liste[i].classList.contains("selected")){//verifie si un li contient la classe "selected"
//         liste[i].classList.remove("selected")//si oui -> supprime
//     } else{
//         liste[i].classList.add("newselected")// ajoute classe aux li sans classe "selected" 
//     }
// }


//TOOGLE AUTO
for(let item of liste){
   item.classList.toggle("selected");
}


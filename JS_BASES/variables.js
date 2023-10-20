//declarer 3 variables
let nom = "Bruce";
let age = 35;
let estMajeur = true;

//declarer constante
const LANGUE_MAT = "français";

//afficher variables et constante
console.log(nom, age, estMajeur, LANGUE_MAT);

//tableau langages programmation
let langageProg = ["html", "css", "javascript"];
console.log(langageProg);



//declare objet
let personInfos = {
  "prenom": "Peter",
  "phone": "0102030405",
  "mail": "peter@gmail.com",
};

//afficher date actuelle
let maDate = new Date();
console.log(maDate);

//verification typeof
console.log(typeof nom);
console.log(typeof age);
console.log(typeof estMajeur);
console.log(typeof langueMat);
console.log(typeof langageProg);
console.log(typeof personInfos);


const multiplier = (x,y) =>{
    let result=x*y;
   console.log(result);
}
multiplier(2,3)
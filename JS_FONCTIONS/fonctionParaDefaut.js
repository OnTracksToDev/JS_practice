//creation fonction

function soustraction(a, b, c = 0, d = 0) {
  //nom fonction + 4 parametres dont 2 valeur a zero par defaut
  let resultat = a - b - c - d; //soustraction
  return resultat; //retour
}
console.log(soustraction(100, 50)); //affichage appel fonction

//BONUS fonction flechee

const calcul = (e, f, g = 0, h = 0) => e - f - g - h;

console.log(calcul(100, 50));

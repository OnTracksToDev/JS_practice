//fonction calcul TTC
function calculMontantTTC(ht, tva = 0.2) {
  let resultat = ht * (1 + tva);
  return resultat.toFixed(2) + "€";
}
console.log(calculMontantTTC(10));

//fonction flechee
const calcul = (pHT, taux = 0.2) => (pHT * (1 + taux)).toFixed(2) + "€";
console.log(calcul(10));

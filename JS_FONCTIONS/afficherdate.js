//Date du JOUR complete

function afficherDate() {
  const aujourdhui = new Date();
  const jour = aujourdhui.getUTCDate().toString().padStart(2, "0"); //jour du mois
  const mois = (aujourdhui.getUTCMonth() + 1).toString().padStart(2, "0"); //mois
  const annee = aujourdhui.getFullYear().toString().padStart(2, "0"); //annee
  const heure = aujourdhui.getHours().toString().padStart(2, "0"); //heure
  const minute = aujourdhui.getMinutes().toString().padStart(2, "0"); //minute

  const phrase = `Aujourd'hui nous sommes le ${jour} ${mois} ${annee} et il est ${heure}h ${minute}.`;
  console.log(phrase);
}

afficherDate();

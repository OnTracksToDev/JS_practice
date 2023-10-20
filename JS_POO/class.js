
class Voiture {
    constructor(nom, modele, couleur) {//constructeur
        this.nom = nom;
        this.modele = modele;
        this.couleur = couleur;
    }
}

const clio = new Voiture("Clio", "Renault", "Bleu");
clio.annee = "2021";
console.log(clio);

class Electric extends Voiture {
    constructor(nom, modele, couleur, autonomie) {
        super(nom, modele, couleur); // Appelle le constructeur de la classe parente avec les paramètres nécessaires
        this.autonomie = autonomie;
    }
}

const tesla = new Electric("Model 3", "Tesla", "Rouge", 300);
console.log(tesla);

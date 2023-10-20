class Smartphone {
    constructor(marque, modele, annee, nbCamera, screenSize, comptability) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.nbCamera = nbCamera;
        this.screenSize = screenSize;
        this.comptability = comptability;
    }

    getMarque() {
        return `La marque du Smartphone est ${this.marque}.`;
    }
    
    setMarque(marque) {
        this.marque = marque;
    }
    
    getModele() {
        return `Le modèle du smartphone est ${this.modele}.`;
    }
    
    setModele(modele) {
        this.modele = modele;
    }
    
    getAnnee() {
        return `L'année de fabrication du smartphone est ${this.annee}.`;
    }
    
    setAnnee(annee) {
        this.annee = annee;
    }
    
    getNbCamera() {
        return `Le nombre de caméras du smartphone est ${this.nbCamera}.`;
    }
    
    setNbCamera(nbCamera) {
        this.nbCamera = nbCamera;
    }
    
    getScreenSize() {
        return `La taille de l'écran du smartphone est de ${this.screenSize} pouces.`;
    }
    
    setScreenSize(screenSize) {
        this.screenSize = screenSize;
    }
    
    getComptabilite() {
        return `La compatibilité du smartphone est avec ${this.comptabilite}.`;
    }
    
    setComptabilite(comptabilite) {
        this.comptabilite = comptabilite;
    }
}

const myPhone = new Smartphone("Apple", "12Mini",2015, "700px", "5g");
console.log(myPhone);
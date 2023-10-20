let spin = {
  nom: "Morales",
  prenom: "Milles",
  age: 19,
  organisation : "Avengers",
  saluer: function () {
    //methode saluer
    console.log(`Bonjour, je suis ${this.prenom} et mon nom est ${this.nom}`);
  },
};
//appel fonction
spin.saluer();

//methode
spin.equipe = function () {
  console.log(`Je fais équipe avec les ${this.organisation}`);
}

//appel methode
spin.equipe();

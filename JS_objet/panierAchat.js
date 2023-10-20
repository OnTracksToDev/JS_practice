//objet panier
let panier = {
  articles: ["Iphone 15", "MacBook"],
  quantiteTotale: 2,
  prixTotal: 2000,

  //methode ajout article
  ajoutArticle: function (nomArticle, prixProduit) {
    this.articles.push(nomArticle),
      (this.prixTotal += prixProduit),
      this.quantiteTotale++;
  },

  //methode suppression article
  suppArticle: function (nomArticle, prixProduit) {
    const index = this.articles.indexOf(nomArticle);
    if (index !== -1) {//si article present dans panier
      this.articles.splice(index, 1), //supprime l'article
        (this.prixTotal -= prixProduit),
        this.quantiteTotale--;
    } else {//si l'article n'est pas dans le panier
      console.log("Ce produit n'est pas dans le panier");
    }
  },

  //methode quantite totale
  affQuantiteTotal: function () {
    s = this.quantiteTotale > 1 ? "s" : "";
    console.log(`${this.quantiteTotale} article${s}`);
  },

  //methode prix total
  total: function () {
    console.log(`Prix total: ${this.prixTotal}€`);
  },

  //methode liste article(s) du panier
  listArticles: function () {
    console.log("Liste des articles :");
    for (let article of this.articles) {
      //parcours tableau "articles"
      console.log(`- ${article}`);
    }
  },
};

//invocations:
panier.ajoutArticle("TV", 850); //ajoute  l'article
panier.ajoutArticle("Montre", 120); //ajoute  l'article
console.log(panier.articles);
panier.suppArticle("Montre", 120); //supprime l'article
console.log(panier.articles);
panier.affQuantiteTotal(); // affiche quantite total
panier.total(); //affiche prix total
panier.listArticles(); // affiche les articles du panier

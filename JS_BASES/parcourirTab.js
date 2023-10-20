let books = ["Harry Potter", "Les misérables","Le petit prince","Alice au pays des merveilles","Le seigneur des anneaux"];//declare tableau livres

for (let book of books){//boucle for of pour parcourir tableau
    if(book != "Les misérables"){//condition tout les livres sauf "les misérables" (index 1)
    console.log(`Nom du livre : ${book}`);//affichage elements tableau avec "Nom du livre"
}
}

//creation balise image
const monImage = document.createElement("img");
monImage.setAttribute('id','myImage');// id = myImage
monImage.setAttribute('alt','pompier' )// alt = pompier
monImage.src= "fireman.jpg"// source image

console.log(monImage);

//insertion image
const samedi = document.querySelector('.we');
const body = document.querySelector('body');
//insert image
body.insertBefore(monImage,samedi);

//changement source image
monImage.src= "error.jpg";
monImage.setAttribute('alt', "erreur_404")

//suppression attribut id
monImage.removeAttribute('id')



//variable globale
const outerVar = "Je suis externe";

function vraie(){
    console.log(outerVar);
    const innerVar = "Je suis interne"
    console.log(innerVar)
}
//appel fonction
vraie()


//appel variable exterieur "erreur"
console.log(innerVar);


//regex qui prend en compte les " ",".","-"
let regex = /^\+33[1-9]([-. ]?[0-9]{2}){4}$/;

//DOM span
const span = document.querySelector('span');

//DOM span input telephone
const tel = document.querySelector('#telephone')
tel.addEventListener('input',function(){//ajout event sur 'input' telephone
    if (regex.test(tel.value) ){//test saisie respect regex
        // console.log("ok")
        span.textContent= "✅"//affiche si CORRECT
        tel.style = 'border:solid 2px #12a70a'//bordure vert si CORRECT
    } else{
        // console.log("pas bon");
        span.textContent= "❌"//affiche si PAS CONFORME
        tel.style = ''//bordure par defaut si PAS CONFORME

    }
})


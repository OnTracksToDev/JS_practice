const premierParagraphe = document.querySelector('p');

const deuxiemeParagraphe =document.querySelectorAll('p')[1];
console.log(deuxiemeParagraphe);


premierParagraphe.addEventListener('mouseover',function(){
    deuxiemeParagraphe.classList.remove('spoiler')
})
deuxiemeParagraphe.addEventListener('mouseout', function(){
    deuxiemeParagraphe.classList.add('spoiler')
})
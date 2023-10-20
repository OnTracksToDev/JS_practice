
let agePrompt = prompt("avez vous plus de 18 ans? oui ou non")
let age=agePrompt.trim().toLowerCase();

alert(age == 'oui'? "Majeur" : "Mineur");
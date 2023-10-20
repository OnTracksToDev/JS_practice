let age;

do {
  let agePrompt = prompt("entrez age SVP");
  age = parseInt(agePrompt);
} while (isNaN(age) || age >= 100 || age < 0);

alert(`Vous avez ${age} an${age > 1 ? "s" : ""}.`);

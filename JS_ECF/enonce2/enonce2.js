const questions = document.querySelectorAll(".questions");
const reponses = document.querySelectorAll(".reponses");

//on sait que pour questions[0] la reponse a le meme indice reponse[0]
//parcour tableau questions
questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    // toggle class : "reponses" pour chaque questions
    reponses[index].classList.toggle("reponses");
  });
});

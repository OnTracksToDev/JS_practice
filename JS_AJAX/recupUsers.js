const paragraphe = document.querySelector("#username");

function fetchUserData() {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((data) => {
      donnees(data);test(data)
    })
    .catch((error) => console.error("Erreur :", error));
}

function donnees(data) {
  for (const user of data) {
    if (user.id == 3) {
      paragraphe.innerHTML = `L'utilisateur <strong>${user.name}</strong> habite à <strong>${user.address.city}</strong>.`;
      console.log(`${user.name}`);
    }
  }

}

function test(data) {
  for (const user of data) {
    console.log(user.name);
    let list = document.createElement("li");
    list.innerHTML = `${user.name}`;
    let ul = document.querySelector("ul");
    ul.appendChild(list);
  }
}

const monBtn = document.querySelector("button");
monBtn.addEventListener("click", fetchUserData);


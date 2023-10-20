// fetch("https://api.gameofthronesquotes.xyz/v1/houses")
//   .then((response) => response.json())
//   .then((data) => afficherHouse(data))
//   .catch((error) => console.error("Erreur:", error));

// function afficherHouse(data) {
//   const container = document.getElementById("container");
//   for (const house of data) {
//     const houseElement = document.createElement("div");
//     houseElement.className = "house";
//     houseElement.innerHTML = `
//       <h2>${house.name}</h2>`;
//     for (const member of house.members) {
//       houseElement.innerHTML += `<button>${member.name}</button>`;
//       container.appendChild(houseElement);
//       fetch(`"https://api.gameofthronesquotes.xyz/v1/author/${member.name}/"`)
//         .then((response) => response.json())
//         .then((data) => citation(data))
//         .catch((error) => console.error("Erreur:", error));
//       buttons = document.querySelectorAll("button");
//       function citation() {
//         houseElement.innerHTML +=  `
//         <p>${name.sentence}</p>`;
//       }
//       for (const btn of buttons) {
//         btn.addEventListener("click", citation);
//       }
//     }
//   }
// }
// Fetch the list of houses
fetch("https://api.gameofthronesquotes.xyz/v1/houses")
  .then((response) => response.json())
  .then((data) => afficherHouse(data))
  .catch((error) => console.error("Erreur:", error));

function afficherHouse(data) {
  const container = document.getElementById("container");
  for (const house of data) {
    const houseElement = document.createElement("div");
    houseElement.className = "house";
    houseElement.innerHTML = `<h2>${house.name}</h2>`;
    for (const member of house.members) {
      const button = document.createElement("button");
      button.textContent = member.name;
      houseElement.appendChild(button);

      button.addEventListener("click", () => {
        fetch(`https://api.gameofthronesquotes.xyz/v1/author/${member.slug}/`)
          .then((response) => response.json())
          .then((data) => {
            const quoteElement = document.createElement("p");
            quoteElement.innerHTML = `"${data.sentence}" ${member.name}`;
            houseElement.appendChild(quoteElement);
          })
          .catch((error) => console.error("Erreur:", error));
      });
    }
    container.appendChild(houseElement);
  }
}

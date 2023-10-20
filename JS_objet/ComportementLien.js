const monLien = document.querySelector("a");

function redirection(event) {
  if (confirm("Êtes-vous sûr de vouloir quitter ce site ?")) {
    monLien.href = "https://www.cci.fr/";
  } else {
    event.preventDefault();
  }
}

monLien.addEventListener("click", redirection);

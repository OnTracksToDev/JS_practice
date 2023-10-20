//post de l'API
fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then((data) => afficherPosts(data))
  .catch((error) =>
    console.error("Erreur lors de la récupération des posts :", error)
  );

//fonction afficher posts
function afficherPosts(data) {
  const container = document.getElementById("container");// DOM div parent

  for (const post of data) {// pour chaque post:
    const postBloc = document.createElement("div");// cree une div class='posts
    postBloc.className = "posts";
    postBloc.innerHTML = ` 
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <button onclick="afficherCommentaires(${post.id})">Afficher les commentaires</button>
    <div id="commentaires-${post.id}"></div>`;//chaque element dans la div de chaque post
    // console.log(`${post.id}`);
    container.appendChild(postBloc)
  }
}

//comentaires
function afficherCommentaires(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((data) => {
            const commentaires = data.map((comment) => `<p>${comment.body}</p>`).join(" ");
            document.getElementById(`commentaires-${postId}`).innerHTML = commentaires;
            // console.log(commentaires);
        })
        .catch((error) => console.error("Erreur lors de la récupération des commentaires :", error));
}


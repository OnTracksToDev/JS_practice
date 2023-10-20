fetch('https://jsonplaceholder.typicode.com/posts' , {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userId:1,
        title : 'A quand l\'hiver?',
        body: 'Il fait chaud au mois d\'Octobre!'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur :', error));
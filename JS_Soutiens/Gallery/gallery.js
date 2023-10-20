const monImage = document.querySelector("#monImage");
const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");
const play = document.querySelector("#playBtn");

//tableau images
let imageTab = [];
for (let i = 1; i < 11; i++) {
  imageTab.push(`Sequence${i}.jpg`);
}

console.log(imageTab);//affiche tableau Images

//image actuel
let indice = 0;

//affiche image
function affImage() {
  monImage.src = imageTab[indice];
}

//previous image
prev.addEventListener("click", function () {
  if (indice > 0) {
    indice--;
  } else if (indice==0){
    indice = 9;
  }
  affImage();
});

//next image
next.addEventListener("click", function () {
  if (indice < imageTab.length - 1) {
    indice++;
  } else if (indice==9){
    indice = 0;
  }
  affImage();
});

//play
let autoplayInterval = 0;

const toggleAutoplay = () => {
  if (autoplayInterval != 0) {
    clearInterval(autoplayInterval);
    autoplayInterval = 0;
  } else {
    autoplayInterval = setInterval(() => {
        if (indice < imageTab.length - 1) {
            indice++;
          }
          affImage();
    }, 1000);
  }
};

play.addEventListener("click", function (){
    toggleAutoplay()
})

// mediaControls.forEach((control) => control.classList.toggle("hidden"));

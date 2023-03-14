// Tools
// array
// const/let
// querySelector
// eventListener
// increment/descrement


// select the active image
let activeImage = 0

// seleziono l' elemento dove mostrero le immagini
const imagesElement = document.querySelector('.slider > .images')
console.log(imagesElement);

//Creo un'array vuoto per le immagini------------------------------------------------------------------------

let imagesArray = [];
console.log(imagesArray)

//Creo un'array di percorsi

const imageNames = ['./assets/img/01.webp', './assets/img/02.webp', './assets/img/03.webp', './assets/img/04.webp', './assets/img/05.webp'];

//seleziono tutte le immagini nella cartella e le aggiungo all'array:
imageNames.forEach((imageName) => {
  const image = new Image();
  image.src = imageName;
  const imgElement = `<img class="img-fluid src="${imageName}" alt="">`
  console.log(imgElement);
  // InsertAjacentHTML
  imagesElement.insertAdjacentHTML('beforeend', imgElement)
});



// loop over the images and add a new img dom element
for (let i = 0; i < imagesArray.length; i++) {
  const imgSrc = imageNames[i];
  const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
  console.log(imgElement);
  // InsertAjacentHTML
  imagesElement.insertAdjacentHTML('beforeend', imgElement)
}



import { dogs } from './data.js'

let randomNumber = Math.floor(Math.random() * dogs.length) 
const dogImage = document.getElementById("dog-image")
const modalTtext = document.getElementById("modal-text")

document.addEventListener("click", (e) => {
   if (e.target.id === 'cross-btn') {
    document.getElementById('nope-badge').style.display = 'block'
    document.getElementById("like-badge").style.display = 'none'
   } else if (e.target.id === 'like-btn') {
    document.getElementById('nope-badge').style.display = 'none'
    document.getElementById("like-badge").style.display = 'block'
   }
    
})

function renderInitialPhoto() {
    let dogHtml = 
    `<img class="dog-img" src="${dogs[randomNumber].avatar}" alt="">
    `
    dogImage.innerHTML = dogHtml
}

renderInitialPhoto()

function renderDogDescription() {
    let dogTextHtml = 
    `<h3 class="dog-name-description">${dogs[randomNumber].name}, ${dogs[randomNumber].age}</h3>
    <p class="dog-message">${dogs[randomNumber].bio}</p>
    `
    modalTtext.innerHTML = dogTextHtml
}

renderDogDescription()
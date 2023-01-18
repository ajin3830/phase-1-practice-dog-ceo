console.log('%c HI', 'color: firebrick')

function getDog() {
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(dogs => dogs.message.forEach(renderDogs))
}
document.addEventListener("DOMContentLoaded", getDog)
// make sure DOM loads before running the functions


function renderDogs(dog) {
    const dogPics = document.querySelector('#dog-image-container');

    const image = document.createElement('img');
    image.src = dog;

    dogPics.appendChild(image)
}

// The Object.keys() static method returns an array of a given object's own 
// enumerable string-keyed property names.
function getDogBreed() {
    fetch ("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    // .then(dogs => console.log(dogs) )
    .then(dogBreedData => Object.keys(dogBreedData.message).forEach(renderDogBreeds))
}
getDogBreed()



function renderDogBreeds(breed) {
    const dogList = document.querySelector("#dog-breeds");

    const li = document.createElement('li');
    li.textContent = `${breed}`

    dogList.appendChild(li)

    li.addEventListener('click', (e) => { 
        let newColor = e.target.style.color
        newColor = e.target.style.color = newColor === "blue"? "black" : "blue"
        
    })
}

console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => 
{
    fetchImages()
    fetchBreeds()
})

//debugger
function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => showImage(dogs["message"]))
}

function showImage(dogs){
    const divImage = document.getElementById("dog-image-container")
    dogs.forEach((image) => {
        // divImage.innerHTML += `<img src=${image} />`
        const img = document.createElement('img')
        img.src = image
        divImage.appendChild(img)
    })

}
// ------------------------------------------------------------------------------------------------
function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => addBreeds(breeds["message"]))
}

function addBreeds(breeds){
    //  console.log(breeds)
    for(breed in breeds)
    {
        displayBreed(breed)
    }

    // debugger

    function displayBreed(breed)
    {
        const breedsUl = document.getElementById('dog-breeds');
        const breedsName = document.createElement('li');
        breedsName.innerText = breed;
        const dogType = document.createElement("ul");
        breedsUl.appendChild(breedsName)
        // debugger
        for(type of breeds[breed])
        {
            const typeName = document.createElement("li");
            typeName.innerText = type;
            breedsName.appendChild(dogType)
            dogType.appendChild(typeName);
            // debugger

        }
    }


}


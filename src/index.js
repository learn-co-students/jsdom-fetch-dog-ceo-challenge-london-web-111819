console.log('%c HI', 'color: firebrick')

  function fetchImages() {
    const targetURL = 'https://dog.ceo/api/breeds/image/random/4'
    return fetch(targetURL).then(resp => resp.json()).then(json => renderImages(json));
  }

  function renderImages(json) {
    //   debugger
      const dogContainer = document.querySelector('#dog-image-container')
    json.message.forEach(imageUrl => {
        let newImage = document.createElement('img')
        newImage.src = imageUrl
        dogContainer.appendChild(newImage)
    })
  }

  function fetchBreeds(optionSelected) {
    const targetURL = 'https://dog.ceo/api/breeds/list/all'
    return fetch(targetURL).then(resp => resp.json()).then(json => renderBreeds(json,optionSelected));
  }

  function renderBreeds(json,optionSelected) {

      const dogBreed = document.querySelector('#dog-breeds')
    Object.keys(json.message).forEach(breedItem => {
        if (breedItem.slice(0,1) == optionSelected) {
        let newBreedItem = document.createElement('li')
        newBreedItem.id = `breed-${breedItem}`
        newBreedItem.addEventListener("click",function(event){
            document.getElementById(event.target.id).style.color = 'Red'
        })
        newBreedItem.innerText = breedItem
        if (json.message[breedItem].length != 0)  {
            let newBreedSubItem = document.createElement('ul')

            json.message[breedItem].forEach(breedType => {
                let newBreedType = document.createElement('li')
                newBreedType.innerText = breedType
                newBreedSubItem.appendChild(newBreedType)
            })
        newBreedItem.appendChild(newBreedSubItem)
        }
        dogBreed.appendChild(newBreedItem)
    }
  })
}

  document.addEventListener('DOMContentLoaded', function(){
      let additionalOption = document.createElement('option')
      additionalOption.value = "e"
      additionalOption.innerText = additionalOption.value
      document.getElementById("breed-dropdown").appendChild(additionalOption)
      let breedDropDown = document.getElementById('breed-dropdown')
      breedDropDown.addEventListener("change", function(event){
        fetchBreeds(event.target.value)
        
      })
      fetchImages()
      
      //TODO: Update fetchBreeds so that we will provide the option selected
  })
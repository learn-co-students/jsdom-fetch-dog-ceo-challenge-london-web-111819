document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 const imgContainer = document.querySelector('#dog-image-container')
 const breedUrl = "https://dog.ceo/api/breeds/list/all"
 const breedList = document.querySelector('#dog-breeds')
 let dropDown = document.querySelector('#breed-dropdown')


    fetch(imgUrl).then(function(response){
    return response.json();
    })
    .then(function(json){
        for(let i = 0; i < json.message.length; i++) {
        let img = document.createElement('img')
        img.src = json.message[i]
        imgContainer.appendChild(img)
        }  
    })

    fetch(breedUrl).then(function(response){
        return response.json();
    })
    .then(function(json){
        for(let i = 0; i < Object.keys(json.message).length; i++){
        let li = document.createElement('li')
        li.textContent = Object.keys(json.message)[i]
        breedList.appendChild(li)
        li.style.display = 'block'
        li.addEventListener('click', function() {
        li.style.color = 'blue'
        })
    }
    })

    dropDown.addEventListener('change', function(e) {
        e.preventDefault()
        if(e.target.value === 'a'){
            for(let i = 0; i < breedList.children.length; i++) {
                debugger
                breedList.children[i].stlye.display = 'block'
                if(breedList.children[i].textContent[0] !== 'a') {
                    let target = breedList.children[i];
                    target.style.display = 'none'
                }
            }
        }

        if(e.target.value === 'b'){
            for(let i = 0; i < breedList.children.length; i++) {
                breedList.children[i].stlye.display = 'block'
                if(breedList.children[i].textContent[0] !== 'b') {
                    let target = breedList.children[i];
                    target.style.display = 'none'
                }
            }
        }

        if(e.target.value === 'c'){
            for(let i = 0; i < breedList.children.length; i++) {
                breedList.children[i].stlye.display = 'block'
                if(breedList.children[i].textContent[0] !== 'c') {
                    let target = breedList.children[i];
                    target.style.display = 'none'
                }
            }
        }

        if(e.target.value === 'd'){
            for(let i = 0; i < breedList.children.length; i++) {
                breedList.children[i].stlye.display = 'block'
                if(breedList.children[i].textContent[0] !== 'd') {
                    let target = breedList.children[i];
                    target.style.display = 'none'
                }
            }
        }
    })
})


fetch('rainbow.jpg').then(response => ){

    
}

document.addEventListener("DOMContentLoaded", function() {
    addListeners()
    loadCat(allCats[0])

})

// function hiRose(){
//     console.log("hi rose")
// }

let allCats = [
    {
        "id":0,
        "name":"Party Cat",
        "image":"assets/party_cat.jpeg",
        "catchphrase":"Party on Party Cat"
    },
    {   "id":1,
        "name":"Mittens",
        "image":"https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg",
        "catchphrase":"I'd rather be at home with my human"
    },
    {
        "id":2,
        "name":"Tod",
        "image":"https://i.ytimg.com/vi/h6ExCwtgGe8/maxresdefault.jpg",
        "catchphrase":"Yeah... I'm a dj, but like I don't like to play out at lame venues like this to main stream. CatMittens has really sold out imo. Anyway, check out my sound cloud at todEzyPizza its mostly progressive house and future bass."
    }
]

// Change DOM Elements
function loadCat(cat){
    let container = document.querySelector('#selected_cat_info')
    let h2 = container.querySelector('h2')
    let img = container.querySelector('img')
    let p = container.querySelector('p')

    h2.textContent = cat.name 
    img.src = cat.image
    let left = '200px'
    // img.style.padding = `5px 5px 5px ${left}`
    img.style.paddingLeft = `${left}`

    p.textContent = cat.catchphrase
}

function addToAside(cat){
    let ul = document.querySelector('#cat_ul')
    let li = document.createElement('li')
    li.textContent = cat.name
    li.addEventListener('click', handleClick)
    ul.appendChild(li)
}

// event handlers 
function handleClick(e){
    console.log(e.target.textContent)
    // allCats.find{|cat| name == cat.name}
    let selected_cat = allCats.find(function(cat){
       return cat.name === e.target.textContent
    })
    loadCat(selected_cat)
}

function handleSubmit(e){
    e.preventDefault()
    let cat = {
        "name": e.target.cat_name.value,
        "image": e.target.cat_image.value,
        "catchphrase": e.target.cat_phrase.value
    }
   allCats.push(cat)
   loadCat(cat)
   addToAside(cat)
}

// function handleFormToggle(){
//     let form = document.querySelector('form')
//     form.classList.toggle('hide')
// }

// add eventListeners 
function addListeners(){
    let catListLi = document.querySelectorAll('#cat_ul li')
    let form = document.querySelector('form')
    let btn = document.querySelector('#add_cat_btn')

    catListLi.forEach(function(li){
    li.addEventListener('click', handleClick)
    })

    form.addEventListener('submit',handleSubmit)
    btn.addEventListener('click', function(e){
        // console.log(e.target.textContent)
        let form = document.querySelector('form')
        form.classList.toggle('hide')
    })
}

function sayHiRose(greeting){
    greeting('rose')
}

function greeting(name){
    console.log(`hi my name is ${name}`)
}

sayHiRose(greeting)
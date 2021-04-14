// url
const baseURL = "http://localhost:3000/colors"

// selectors
const form = document.querySelector("#new-color-form")
const ul = document.querySelector("#colors")


// handlers
const handleSubmit = e => {
    e.preventDefault()
    console.log("in handleSubmit")
    const newColor = {
        name: e.target.newcolor.value
    }
    postColor(newColor).then(colorObj => renderColor(colorObj))
}

// listeners
form.addEventListener("submit", handleSubmit)

// fetches
const postColor = color => {
    console.log("in postColor()")
    const config = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(color)
    }
    return fetch(baseURL, config)
            .then(res => res.json())
}

// render functions
const renderColor = color => {
    const li = document.createElement('li')
    li.style.color = color.name
    li.textContent = color.name
    ul.appendChild(li)
}

// initial fetch and render
const initialize = () => {
    fetch(baseURL)
        .then(r => r.json())
        .then(colors => {
            colors.forEach(color => renderColor(color))
        })
}
initialize()
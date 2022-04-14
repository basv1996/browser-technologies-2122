var shirtjeSVG = document.querySelector("#shirtje")
var color = document.querySelector(".homePageForm select#color")
var textInput = document.querySelector("#textInput")
var textOnShirt = document.querySelector(".textOpShirtje")

color.addEventListener("change", function() {
    shirtjeSVG.style.fill=color.value
})

textInput.addEventListener("keyup", function() {
    textOnShirt.innerHTML = textInput.value
})

console.log("test3")
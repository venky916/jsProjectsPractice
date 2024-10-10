const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexColorCopyBtn =  document.querySelector(".hex-copy-color")


//create a random HEX COLOR
hexBtn.addEventListener('click', () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";

    for (let i = 0; i < 6; i++){
        hexColorOutput +=characterSet.charAt(Math.floor(Math.random()*16))
    }
    // console.log(hexColorOutput, hexColorValue.innerHTML, hexColorValue.innerText,hexColorValue.textContent);
    hexColorValue.textContent = `#${hexColorOutput}`
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`

})

//rbg color generator

const rgbBtn = document.querySelector('#rgb-btn');
const getRedInputRange = document.querySelector("#red")
const getGreenInputRange = document.querySelector("#green")
const getBlueInputRange = document.querySelector("#blue")
const rgbColorContainer = document.querySelector(".rgb-color-container")
const rgbColorCopyBtn = document.querySelector(".rgb-copy-color")
const rgbColorValue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener('click', () => {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;
    // console.log(extractBlueValue,extractGreenValue,extractRedValue)
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbColorValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
})


function copyHexColorToClipBoard() {
    navigator.clipboard.writeText(hexColorValue.textContent)  
}

hexColorCopyBtn.addEventListener('click',copyHexColorToClipBoard)


function copyRgbColorToClipBoard() {
    navigator.clipboard.writeText(rgbColorValue.textContent)
}
rgbColorCopyBtn.addEventListener("click",copyRgbColorToClipBoard)

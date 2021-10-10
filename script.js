let container = document.getElementById('container');
let slider = document.getElementById('slider');
let colorModeButton = document.getElementById('colorMode');
let rainbowModeButton = document.getElementById('rainbowMode');
let eraserButton = document.getElementById('eraserMode');
let clearButton = document.getElementById('clear');
let pixels = document.querySelectorAll('#container div');
//Display the grid specs selected by the slider.
slider.addEventListener('input', e => {
    slider.nextElementSibling.value = `${e.target.value}*${e.target.value}`;
});
//Thjs function creates the necessary divs to fil the grid and it invokes another function that sets the grid properties.
slider.addEventListener('change', e => {
    let gridSpecs = e.target.value;
    container.innerHTML = '';
    let i = 0;
    do {
        container.appendChild(document.createElement('div'));
        i++;
    }
    while(i < gridSpecs**2);
    pixels = document.querySelectorAll('#container div');
    setGridProperties(gridSpecs);
})

function setGridProperties(specs) {
    container.style.gridTemplateColumns =`repeat(${specs}, 1fr)`;
    container.style.gridTemplateRows =`repeat(${specs}, 1fr)`;
}
// setting up one specific color mode.
colorModeButton.addEventListener('click', specificColorModeAtHover);

function specificColorModeAtHover() {
    let colorWidget = document.getElementById('colorWidget');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', e => {
            e.target.style.backgroundColor = colorWidget.value;
        })
    })
};
// setting up rainbow color mode.

rainbowModeButton.addEventListener('click', rainbowColorModeAtHover);

function rainbowColorModeAtHover() {
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', e => {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            e.target.style.backgroundColor = randomColor;
        })
    })
};
// setting up the eraser mode.

eraserButton.addEventListener('click', eraserModeAtHover);

function eraserModeAtHover() {
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', e => {
            e.target.style.backgroundColor = '#ffffff';
        })
    })
};

//Setting up the clear button.

clearButton.addEventListener('click', clearColor);

function clearColor() {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#ffffff'
    })
}
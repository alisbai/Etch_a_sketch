let container = document.getElementById('container');
let slider = document.getElementById('slider');
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
    setGridProperties(gridSpecs);
})

function setGridProperties(specs) {
    container.style.gridTemplateColumns =`repeat(${specs}, 1fr)`;
    container.style.gridTemplateRows =`repeat(${specs}, 1fr)`;
}
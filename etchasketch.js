const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

let gridSize = document.getElementById("slider");
let x = gridSize.value;
let size = 16;

resetButton.addEventListener('click', () => {
    container.innerHTML = '';
    makeGrid()
        // Used event delegation to target children of the grid
    container.addEventListener('mouseover', function (e) {
        // Add the "active" class to only divs with a "box" class
         if (e.target.matches('.makeRow')) {
        e.target.classList.add('paint');
        }
    })
});

gridSize.onchange = function () {
    x = gridSize.value; 
    makeGrid()
}

function makeGrid() { 
    for (i = 0; i < x; i++) {
        for (j = 0; j < x; j++) {
            //Calculate the how much the box need to be to fit perfectly into the container
            container.appendChild(createSquare(container.clientWidth / x));       
        }
    }
}

function createSquare(size) {
    const row = document.createElement("div");
    row.classList.add('makeRow');
    //Gets number into px using the calculation above
    row.style.width = `${size}px`;
    row.style.height = `${size}px`;
    return row  
}
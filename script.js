const container = document.querySelector(".container"); // imported container Div from HTML


let gridSize = 5; // this is going to be user input line under
// let gridSize = prompt('Enter size of grid: ')


// creates the amount of divs that will be used in the grid
for (let i = 0; i < gridSize ** 2; i++) {
    const gridDiv = document.createElement('div'); // creates a div using DOM
    gridDiv.innerText = `Div ${i + 1}`;
    container.appendChild(gridDiv); // puts new Div inside of container Div as a child
}




const gridSizeButton = document.querySelector(".size");
const divContainer = document.createElement("div");
divContainer.className = "container";
document.body.appendChild(divContainer);

gridSizeButton.addEventListener("click", () => {
  getGridSize();
});

function getGridSize() {
  let gridSize = prompt("Please enter a new grid size. LIMIT 100: ");
  if (gridSize > 100) {
    gridSize = 100;
  }
  console.log(`new grid size ${gridSize}`);
  divContainer.innerHTML = "";

  draw(gridSize);
}

function drawCol(gridSize) {
  let cellSize = 768 / gridSize;
  cellSize = cellSize + "px";
  console.log(cellSize);

  const drawColumn = document.createElement("div");
  drawColumn.className = "column";
  drawColumn.style.width = cellSize;
  drawColumn.style.height = "768px";

  for (let index = 0; index < gridSize; index++) {
    const drawDiv = document.createElement("div");
    drawDiv.style.width = cellSize;
    drawDiv.style.height = cellSize;
    drawDiv.className = "cell";
    drawDiv.addEventListener("mouseover", () => {
      drawDiv.className = "color";
    });
    drawColumn.appendChild(drawDiv);
  }
  divContainer.appendChild(drawColumn);
}

function draw(gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    drawCol(gridSize);
  }
}

draw();

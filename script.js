const divContainer = document.querySelector(".container");

function drawCol() {
  const drawColumn = document.createElement("div");
  drawColumn.className = "column";
  drawColumn.style.width = "16px";
  drawColumn.style.height = "256px";

  for (let index = 0; index <= 15; index++) {
    const drawDiv = document.createElement("div");
    drawDiv.style.width = "16px";
    drawDiv.style.height = "16px";
    drawDiv.className = "cell";
    drawDiv.addEventListener("mouseover", () => {
      drawDiv.className = "color";
    });
    drawColumn.appendChild(drawDiv);
  }
  divContainer.appendChild(drawColumn);
  console.log("draw column");
}

function draw() {
  for (let i = 0; i <= 15; i++) {
    drawCol();
  }
}

draw();

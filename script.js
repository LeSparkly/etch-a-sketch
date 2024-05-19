const divContainer = document.querySelector(".container")

function drawCol() {
    for (let i = 0; i <= 16; i++) {
        const drawColumn = document.createElement("div")
        drawColumn.className = "column"
        drawColumn.style.width ="16px"
        drawColumn.style.height = "256px"
            
            for (let index = 0; index <= 16; index++) {
            const drawDiv = document.createElement("div")
            drawDiv.style.width = "16px"
            drawDiv.style.height = "16px"
            drawDiv.className = "cell"
            drawColumn.appendChild(drawDiv)
            console.log("Create cell")
        }
        divContainer.appendChild(drawColumn)
        console.log("draw column")
    }
}

drawCol()
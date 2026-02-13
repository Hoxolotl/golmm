import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const cellSize = 10;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

const cols = width / cellSize;
const rows = height / cellSize;

const canvas = d3.select("#container").node();
const context = canvas.getContext("2d");

context.strokeStyle = "#4d4d4d";

for (let x = 0; x <= width; x += cellSize) {
  context.moveTo(x, 0);
  context.lineTo(x, height);
}

for (let y = 0; y <= height; y += cellSize) {
  context.moveTo(0, y);
  context.lineTo(width, y);
}

context.stroke();

//LIFE
let grid = [];

function liveCells(col, row, color) {
  context.fillStyle = color;
  context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
}

// Example usage:
liveCells(5, 3, "red");

export function isAlive(cell){
    if(cell.color === ""){
        return false
    } else {
        return true
    }
}

function initialise(grid) {
  // antipattern:  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid.push({
        x: x,
        y: y,
        id: 0,
      });
    }
  }

  // funtcional programming (cannot wetware parse yet):
  grid = Array.from({ length: rows * cols }, (_, i) => {
    const x = i % cols;
    const y = Math.floor(i / cols);

    return { x, y, id: 0 };
  });
  return grid;
}

function gameTic(grid) {
  return grid;
}

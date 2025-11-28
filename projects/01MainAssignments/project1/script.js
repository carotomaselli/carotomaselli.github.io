let font;
let editableString = "du:";

function preload() {
  font = loadFont("Montserrat-Black.otf"); 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  fill(255);
  noStroke();
}

function draw() {
  textAlign(CENTER, CENTER);
  background(180, 230, 150);


  fill(150,255,120);
  
  let size = height * 0.02;
  textSize(size);
  for (let y = 0; y < height / size; y++) {
    let frequency = radians(frameCount * 2);
    let offset = y * 0.8;
    let amplitude = mouseX * 0.03;
    let x = width / 2 + sin(frequency + offset) * amplitude;
    text(
      "mental health awareness  mental health awareness  mental health awareness mental health awareness mental health awareness mental health awareness mental health awareness mental health awareness mental health awareness", x, y * size);
  
  }

  fill(255);
  textSize(height * 0.1);
  text("WIE", mouseX, height * 0.1);
  text("GEHTS", mouseX / 2, height * 0.3);
  text("DIR ?", mouseX / 3, height * 0.6);

  // editable text
  textSize(height * 0.08);
  textAlign(LEFT, TOP);
  fill(180, 230, 150);
  rect(0, height*0.85, width, height*0.85 );
  fill(255);
  text(editableString, 0, height * 0.85);
}

// keyTyped only receives printable characters reliably.
// Use keyPressed for special keys (ENTER, BACKSPACE) and keyTyped for printable input.
function keyPressed() {
  if (keyCode === ENTER) {
    editableString = ""; // clear on Enter
  } else if (keyCode === BACKSPACE) {
    // remove last character when backspace pressed
    editableString = editableString.slice(0, -1);
  }
}

function keyTyped() {
  // In keyTyped, 'key' is usually the printable character typed.
  if (typeof key === 'string' && key.length === 1) {
    editableString = editableString + key;
  }
}


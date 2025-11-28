

let painting = false;
let brushSize = 20;
let erasing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
  noStroke();
  fill(0);
  textAlign(CENTER, TOP);
  textSize(24);
  text("Draw something! If you want to erase, press the BACKSPACE key.", width/2, 10);

  
  if (painting) {
    if (!erasing) {
      // normales Zeichnen
      stroke(0);
      strokeWeight(brushSize);
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
      // Radieren durch Kopieren von benachbarten Pixeln
      let w = brushSize * 2;
      let h = brushSize * 2;
      let sx = mouseX - w/2;
      let sy = mouseY - h/2;
      let dx = mouseX + random(-40, 40);
      let dy = mouseY + random(-40, 40);
      copy(sx, sy, w, h, dx, dy, w, h);
      // wildes Gekritzel
      stroke(random(255), random(255), random(255));
      strokeWeight(random(1, 5));
      line(mouseX, mouseY, mouseX + random(-30, 30), mouseY + random(-30, 30));
    }
  }
}

function mousePressed() {
  painting = true;
}

function mouseReleased() {
  painting = false;
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    erasing = true;
    return false;
  }

  if (keyCode === ENTER || key === 'B') {
    erasing = false;
  }
}

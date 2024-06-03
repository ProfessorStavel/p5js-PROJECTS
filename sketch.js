function setup() {
    createCanvas(400, 400);
    background ("rgb(28,30,28)");
    
  }
  
  function draw() {
    stroke("yellow");
    fill("red");
    
    
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20);
    }
  }
  
window.onload = function() {
  
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  
  var general_grievous = new grievous(320, 240, 5, 0);
  
  //draw the first frame
  requestAnimationFrame(mainLoop);
            
  //Game/simulation Loop
  function mainLoop(timestamp) {
    //processInput(); //in this simple example, we don't have any input to process
    update();
    draw();
           
    requestAnimationFrame(mainLoop);
  }

  function update() {
    general_grievous.update();	
  }
  
  function draw() {			
    //clear our drawing]
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    
    general_grievous.draw_full();
    
    context.restore();
  }
  
}
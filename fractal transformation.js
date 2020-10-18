var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext('2d');

function drawL() {
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,500);
    ctx.lineTo(250,500);
    ctx.lineTo(250,125);
    ctx.lineTo(500,125);
    ctx.lineTo(500,0);
    ctx.lineTo(0,0);
    ctx.fill();
}

function drawAnimation(animationNr, rotationStepSize, xStepLen, yStepLen, scaleStepSize) {
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var stepCount = 0;
    var mirrorStepSize = 0.04;
    var inter = setInterval(drawTransformation, 50);

    function drawTransformation() {
      ctx.save();
      ctx.clearRect(0, 0, 500, 500);

      switch (animationNr) {
          case 1:
            ctx.translate(stepCount * xStepLen, 0);
            ctx.scale(1 - stepCount * scaleStepSize, 1 - stepCount * scaleStepSize);
            ctx.scale(1 - stepCount * mirrorStepSize, 1);
            break;
          case 2:
            ctx.translate(stepCount * xStepLen, 0);
            ctx.rotate(stepCount * rotationStepSize * Math.PI/2);
            ctx.scale(1 - stepCount * scaleStepSize, 1 - stepCount * scaleStepSize);
            break;
          case 3:
            ctx.translate(stepCount * xStepLen/2, stepCount * yStepLen);
            ctx.rotate(-stepCount * rotationStepSize * Math.PI/2);
            ctx.scale(1 - stepCount * scaleStepSize , 1 - stepCount * scaleStepSize);
            ctx.scale(1 - stepCount * mirrorStepSize, 1);
            break;
          case 4:
            ctx.translate(stepCount * xStepLen, stepCount * yStepLen);
            ctx.scale(1 - stepCount * scaleStepSize, 1 - stepCount * scaleStepSize);
            break;
      }

      drawL();
      ctx.restore();

      if (stepCount == 50) {
          clearInterval(inter);
          inter = 0;
      }
      else {
          stepCount++;
      }
    }
}

function animationQ1() {
    ctx.fillStyle = "red";
    drawAnimation(animationNr = 1,
        rotationStepSize = 0.02,
        xStepLen = 10,
        yStepLen = 0,
        scaleStepSize = 0.01);
}

function animationQ2() {
    ctx.fillStyle = "blue";
    drawAnimation(animationNr = 2,
        rotationStepSize = 0.02,
        xStepLen = 5,
        yStepLen = 0,
        scaleStepSize = 0.01);
}

function animationQ3() {
    ctx.fillStyle = "green";
    drawAnimation(animationNr = 3,
        rotationStepSize = 0.02,
        xStepLen = 5,
        yStepLen = 5,
        scaleStepSize = 0.015);
}
function animationQ4() {
    ctx.fillStyle = "orange";
    drawAnimation(animationNr = 4,
        rotationStepSize = 0.02,
        xStepLen = 5,
        yStepLen = 5,
        scaleStepSize = 0.01);

}
function showValue(newValue)
 {
	document.getElementById("range").innerHTML=newValue;
	draw(newValue);
 }
 

    function draw(step) {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
		canvas.width = canvas.width;
		
		
// Draw border
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(500,0);
      ctx.lineTo(500,500);
      ctx.lineTo(0,500);
      ctx.closePath();
      ctx.stroke(); 	
	    var s = step - 1;
      drawF(step);
      }
        // Recursive draw 
      function drawF(step) {
        if (step > 0) {
          step = step-1; 
          ctx.save();
          ctx.save();
          ctx.save();
		  
          if(step == s)
          ctx.fillStyle = "red";
          //1 ketvirtis
          ctx.transform(-0.5, 0, 0, 0.5, 500, 0);
          drawF(step, 0); 
          ctx.restore();
          
          if (step == s )
                ctx.fillStyle = "blue";
          // 2 ketvirtis
          ctx.transform(0, 0.5, -0.5, 0, 250, 0);
          drawF(step, 1); 
          ctx.restore();
          
          if(step == s)
            ctx.fillStyle = "green";
          // 3 ketvirtis
          ctx.transform(0, 0.25, 0.25, 0, 125, 250);
          drawF(step, 2);
          ctx.restore();
          
          if(step == s)
            ctx.fillStyle = "orange";
          // 4 ketvirtis
          ctx.transform(0.5, 0, 0, 0.5, 250, 250);
          drawF(step, 3);
        }
        else
          drawT();    
      }      

        function drawT(step) {
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
    }
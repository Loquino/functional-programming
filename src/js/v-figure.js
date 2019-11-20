function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.fillStyle = "#FF0000";
      ctx.strokeRect(50, 50, 50, 50);
      
    }
  }

draw();
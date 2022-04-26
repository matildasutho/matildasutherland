

//SPIRAL INPUT AND ANIMation
var spiral = new Image();
function init() {
        spiral.src = 'carrier/spiral.png';
        window.requestAnimationFrame(draw);
}

function draw() {
        var ctx4 =
        document.getElementById('spiral-fall').getContext('2d');
        window.devicePixelRatio=2;  
        var size = 400;
        canvas.style.width = size + "px";
        canvas.style.height = size + "px";

        ctx4.globalCompositeOperation = 'destination-over';
        ctx4.clearRect(0, 0, 800, 800); //clear canvas
  
        ctx4.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx4.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx4.save();
        ctx4.translate(150, 150);

        var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(spiral, -12, -12);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();    
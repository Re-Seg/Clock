var canvas = document.querySelector('#canvas4');
var context = canvas.getContext('2d');

context.beginPath();
context.strokeStyle = 'rgba(255, 255, 255, 1)';
context.lineWidth = '1';
context.moveTo(200,0);
context.lineTo(200,400);
context.stroke();
context.beginPath();
context.strokeStyle = 'rgba(255, 255, 255, 1)';
context.lineWidth = '1';
context.moveTo(0,200);
context.lineTo(400,200);
context.stroke();

context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("12",170,55);
context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("3",350,215);
context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("6",185,375);
context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("9",20,215);

context.beginPath();
context.strokeStyle = 'white';
context.lineWidth = '1';
context.arc(200,200,200,0,2*Math.PI);
context.stroke();
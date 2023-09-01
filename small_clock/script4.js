var canvas = document.querySelector('#canvas4');
var context = canvas.getContext('2d');

context.beginPath();
context.strokeStyle = 'rgba(255, 255, 255, 1)';
context.lineWidth = '1';
context.moveTo(100,0);
context.lineTo(100,200);
context.stroke();
context.beginPath();
context.strokeStyle = 'rgba(255, 255, 255, 1)';
context.lineWidth = '1';
context.moveTo(0,100);
context.lineTo(200,100);
context.stroke();

context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("12",85,27.5);
context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("3",175,107.5);
context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("6",92.5,192.5);
context.font = "bold 40px verdana, Arial, serif";
context.fillStyle = "black";
context.fillText("9",10,107.5);

context.beginPath();
context.strokeStyle = 'white';
context.lineWidth = '1';
context.arc(100,100,100,0,2*Math.PI);
context.stroke();
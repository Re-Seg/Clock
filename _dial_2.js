var canvas = document.querySelector('#canvas4');
var context = canvas.getContext('2d');
var body = document.querySelector('body');

context.beginPath();
context.strokeStyle = 'rgba(255, 255, 255, 1)';
context.lineWidth = '1';
if (body.scrollWidth<=500) {
    context.translate(100,100);
    context.moveTo(100,0);
    context.lineTo(100,200);
}else{
    context.moveTo(200,0);
    context.lineTo(200,400);
}
context.stroke();
context.beginPath();
context.strokeStyle = 'rgba(255, 255, 255, 1)';
context.lineWidth = '1';
if (body.scrollWidth<=500) {
    context.moveTo(0,100);
    context.lineTo(200,100);
}else{
    context.moveTo(0,200);
    context.lineTo(400,200);    
}

context.stroke();

if (body.scrollWidth<=500) {
    context.font = "bold 20px verdana, Arial, serif";
    context.fillStyle = "black";
    context.fillText("12",85,27.5);
    context.font = "bold 20px verdana, Arial, serif";
    context.fillStyle = "black";
    context.fillText("3",175,107.5);
    context.font = "bold 20px verdana, Arial, serif";
    context.fillStyle = "black";
    context.fillText("6",92.5,192.5);
    context.font = "bold 20px verdana, Arial, serif";
    context.fillStyle = "black";
    context.fillText("9",10,107.5);
}else{
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
}

context.beginPath();
context.strokeStyle = 'white';
context.lineWidth = '1';
if (body.scrollWidth<=500) {
    context.arc(100,100,100,0,2*Math.PI);
}else{context.arc(200,200,200,0,2*Math.PI);}
context.stroke();
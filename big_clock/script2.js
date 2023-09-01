var canvas = document.querySelector('#canvas1');
var context = canvas.getContext('2d');
var x = 0;
var y = 0;
var z = 0;

context.beginPath();
context.fillStyle = 'black';
context.arc(200,200,200,0,2*Math.PI);
context.fill();

context.beginPath();
context.fillStyle = 'rgba(255, 255, 255, 1)';
context.arc(200,200,180,0,2*Math.PI);
context.fill();

var l1 = function () {
        var ss = context.strokeStyle = 'black';
        var lw = context.lineWidth = '3';
    
        return context.beginPath() +
               ss +
               lw +
               context.moveTo(0,0) +
               context.lineTo(1,-180) +
               context.stroke();
};

var l2 = function () {
    var ss = context.strokeStyle = 'black';
    var lw = context.lineWidth = '1';

    return context.beginPath() +
           ss +
           lw +
           context.moveTo(0,0) +
           context.lineTo(1,-140) +
           context.stroke();
};

context.translate(200,200);
l1();
while (x<12) {
    var a = Math.PI/6;
    context.rotate(a);
    l1();
    //context.clearRect(-2,0,5,-130);
    x++;
}

context.beginPath();
context.strokeStyle = 'black';
context.lineWidth = '1';
context.arc(0,0,140,0,2*Math.PI);
context.stroke();

while (y<60) {
    var a = Math.PI/30;
    context.rotate(a);
    l2();
    //context.clearRect(-2,0,5,-130);
    y++;
}

/*while (z<360) {
    var a = Math.PI/60;
    context.rotate(a);
    context.clearRect(-2,0,5,-130);
    yz++;
}*/
context.beginPath();
context.strokeStyle = 'black';
context.lineWidth = '1';
context.arc(0,0,130,0,2*Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = 'rgba(255, 255, 255, 1)';
context.arc(0,0,130,0,2*Math.PI);
context.fill();


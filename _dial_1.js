var canvas = document.querySelector('#canvas1');
var context = canvas.getContext('2d');
var body = document.querySelector('body');
var x = 0;
var y = 0;
var z = 0;

context.beginPath();
context.fillStyle = 'black';
if (body.scrollWidth<=500) {
    context.arc(200,200,100,0,2*Math.PI);
}else{context.arc(200,200,200,0,2*Math.PI);}
context.fill();

context.beginPath();
context.fillStyle = 'rgba(255, 255, 255, 1)';
if (body.scrollWidth<=500) {
    context.arc(200,200,90,0,2*Math.PI);
}else{context.arc(200,200,180,0,2*Math.PI);}
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
}
var l2 = function () {
    var ss = context.strokeStyle = 'black';
    var lw = context.lineWidth = '1';

    return context.beginPath() +
           ss +
           lw +
           context.moveTo(0,0) +
           context.lineTo(1,-140) +
           context.stroke();
}
var _l1 = function () {
    var ss = context.strokeStyle = 'black';
    var lw = context.lineWidth = '3';

    return context.beginPath() +
           ss +
           lw +
           context.moveTo(0,0) +
           context.lineTo(1,-90) +
           context.stroke();
}
var _l2 = function () {
    var ss = context.strokeStyle = 'black';
    var lw = context.lineWidth = '1';

    return context.beginPath() +
           ss +
           lw +
           context.moveTo(0,0) +
           context.lineTo(1,-70) +
           context.stroke();
}

context.translate(200,200);
if (body.scrollWidth<=500) {
    while (x<12) {
        var a = Math.PI/6;
        context.rotate(a);
        _l1();
        x++;
    }
}else{
    while (x<12) {
        var a = Math.PI/6;
        context.rotate(a);
        l1();
        x++;
    }
}


context.beginPath();
context.strokeStyle = 'black';
context.lineWidth = '1';
if (body.scrollWidth<=500) {
    context.arc(0,0,70,0,2*Math.PI);
}else{context.arc(0,0,140,0,2*Math.PI);}
context.stroke();

if (body.scrollWidth<=500) {
    while (y<60) {
        var a = Math.PI/30;
        context.rotate(a);
        _l2();
        y++;
    }
}else{
    while (y<60) {
        var a = Math.PI/30;
        context.rotate(a);
        l2();
        y++;
    }
}



context.beginPath();
context.strokeStyle = 'black';
context.lineWidth = '1';
if (body.scrollWidth<=500) {
    context.arc(0,0,65,0,2*Math.PI);
}else{context.arc(0,0,130,0,2*Math.PI);}
context.stroke();

context.beginPath();
context.fillStyle = 'rgba(255, 255, 255, 1)';
if (body.scrollWidth<=500) {
    context.arc(0,0,65,0,2*Math.PI);
}else{context.arc(0,0,130,0,2*Math.PI);}
context.fill();


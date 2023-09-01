var canvas = document.querySelector('#canvas2');
var context = canvas.getContext('2d');
var body = document.querySelector('body');

var l3 = {
    p1 : function () {
        return context.beginPath();
    },
    p2 : function () {
        return context.strokeStyle = 'rgb(200, 12, 12)';
    },
    p3 : function () {
        return context.lineWidth = '0.75';
    },
    p4 : function () {
        return context.moveTo(0,0);
    },
    p5 : function () {
        return context.lineTo(1,-160);
    },
    p6 : function () {
        return context.stroke();
    },

    t : function () {
        return this.p1() +
               this.p2() +
               this.p3() +
               this.p4() +
               this.p5() +
               this.p6();
    }
}
var _l3 = {
    p1 : function () {
        return context.beginPath();
    },
    p2 : function () {
        return context.strokeStyle = 'rgb(200, 12, 12)';
    },
    p3 : function () {
        return context.lineWidth = '0.75';
    },
    p4 : function () {
        return context.moveTo(0,0);
    },
    p5 : function () {
        return context.lineTo(1,-80);
    },
    p6 : function () {
        return context.stroke();
    },
    t : function () {
        return this.p1() +
               this.p2() +
               this.p3() +
               this.p4() +
               this.p5() +
               this.p6();
    }
}
context.translate(200,200);
if (body.scrollWidth<=500) {
    _l3.t() 
}else{
    l3.t();
}
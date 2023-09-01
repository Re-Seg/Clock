var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var body = document.querySelector('body');

var l1 = {
    p1 : function () {
        return context.beginPath();
    },
    p2 : function () {
        return context.strokeStyle = 'rgb(200, 12, 12)';
    },
    p3 : function () {
        return context.lineWidth = '5';
    },
    p4 : function () {
        return context.moveTo(0,0);
    },
    p5 : function () {
        return context.lineTo(1,-120);
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
var _l1 = {
    p1 : function () {
        return context.beginPath();
    },
    p2 : function () {
        return context.strokeStyle = 'rgb(200, 12, 12)';
    },
    p3 : function () {
        return context.lineWidth = '5';
    },
    p4 : function () {
        return context.moveTo(0,0);
    },
    p5 : function () {
        return context.lineTo(1,-60);
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
    _l1.t() 
}else{
    l1.t();
}
alert(body.scrollWidth);
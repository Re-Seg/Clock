var canvas2 = document.querySelector('#canvas3');
var canvas3 = document.querySelector('#canvas2');
var canvas1 = document.querySelector('#canvas');
var réglage = document.querySelector('#régler');
var réglageHeure = document.querySelector('.heure');
var réveilHeure = document.querySelector('.heure-r');
var réglé = document.querySelector('#règle');
var régléReveil = document.querySelector('#règle-r');
var réveil = document.querySelector('#réveil');
var sn = '';
var mn = '';
var hn = '';
var sv = '';
var mv = '';
var hv = '';
var wake_up = '';
var e = "";
var f = true;

réglage.addEventListener("click", Reg);
function Reg() {
    réglageHeure.style.display = 'inline';
    this.style.display = 'none';
    réveil.style.display = 'none';
}
réglé.addEventListener('click', reg);
function reg (e) {
    var problème = document.querySelector('#problème');
    var secondes = document.querySelector('#seconde');
    var minutes = document.querySelector('#minute');
    var heures = document.querySelector('#heure');
    var regex = /[0-9]/;
    var regex1 = /./;
    if (regex1.test(secondes.value) == false &&  regex1.test(minutes.value) == false && regex1.test(heures.value) == false) {
        problème.innerHTML = 'Vous n\'avez pas complété les sections liées au réglage de l\'heure.';
    }else if (regex.test(secondes.value) == false || secondes.value > 59 || regex.test(minutes.value) == false || minutes.value > 59 || regex.test(heures.value) == false || heures.value > 23) {
        problème.innerHTML = 'Complétez correctement, les secondes et les minutes < 60 et les heures à 23.';
    }else{
        réglageHeure.style.display = 'none';
        réglage.style.display = 'inline';
        réveil.style.display = 'inline';
        sn = secondes.value;
        secondes.value = '';
        mn = minutes.value;
        minutes.value = '';
        hn = heures.value;
        heures.value = '';
        f = false;
    }
}

réveil.addEventListener("click", Rev);
function Rev() {
    réveilHeure.style.display = 'inline';
    this.style.display = 'none';
    réglage.style.display = 'none';
}
régléReveil.addEventListener('click', rev);
function rev () {
    var problème = document.querySelector('#problème-r');
    var secondes = document.querySelector('#seconde-r');
    var minutes = document.querySelector('#minute-r');
    var heures = document.querySelector('#heure-r');
    var regex = /[0-9]/;
    var regex1 = /./;
    if (regex1.test(secondes.value) == false &&  regex1.test(minutes.value) == false && regex1.test(heures.value) == false) {
        problème.innerHTML = 'Vous n\'avez pas complété les sections liées au réglage de l\'heure.';
    }else if (regex.test(secondes.value) == false || secondes.value > 59 || regex.test(minutes.value) == false || minutes.value > 59 || regex.test(heures.value) == false || heures.value > 23) {
        problème.innerHTML = 'Complétez correctement, les secondes et les minutes < 60 et les heures à 23.';
    }else{
        réveilHeure.style.display = 'none';
        réveil.style.display = 'inline';
        réglage.style.display = 'inline';
        sv = secondes.value;
        secondes.value = '';
        mv = minutes.value;
        minutes.value = '';
        hv = heures.value;
        heures.value = '';
    }
}

setInterval(r1, 1000);
function r1 () {
    var dateActuel = new Date();
    var s = "";
    var m = "";
    var h = "";
    var d = dateActuel.getDay();
    var M = dateActuel.getMonth();
    var y = dateActuel.getFullYear();
    var sM = dateActuel.getMilliseconds();
    e = f;
    if (e==false) {
        if (e==false) {
            sn++;
            if (sn==60) {
                sn = 0;
                mn++;
                if (mn==60) {
                    mn=0;
                    hn++;
                    if (hn==24) {
                        hn=0;
                    }
                }
            }
        }
        dateActuel = new Date (y,M,d,hn,mn,sn,sM);
        s = dateActuel.getSeconds();
        m = dateActuel.getMinutes();
        h = dateActuel.getHours();
        if (h==hv &&  m==mv && s==sn) {
            window.open('réveil.html', '_blank', 'width = auto, height = auto');
        }
    }else if(e){
        s = dateActuel.getSeconds();
        m = dateActuel.getMinutes();
        h = dateActuel.getHours();
        if (h==hv &&  m==mv && s==sn) {
            window.open('réveil.html', '_blank', 'width = auto, height = auto');
        }
    }else{}
    canvas1.style.transform = "rotate" + "(" + 30*h + "deg" + ")";
    canvas2.style.transform = "rotate" + "(" + 6*m + "deg" + ")";
    canvas3.style.transform = "rotate" + "(" + 6*s + "deg" + ")";
}
/*(function () {*/
   /* var script = document.querySelector('#s');
    var script1 = document.querySelector('#s1');
    var script2 = document.querySelector('#s2');
    var script3 = document.querySelector('#s3');
    var script4 = document.querySelector('#s4');*/
    //alert(script1);
   /* if (screen.width<=1700) {*/
       /* script.setAttributeNS(src, 'small_clock/script.js');
        script1.setAttributeNS(src, 'small_clock/script1.js');
        script2.setAttributeNS(src, 'small_clock/script2.js');
        script3. setAttributeNS(src, 'small_clock/script3.js');
        script4.setAttributeNS(src, 'small_clock/script4.js');
    /*}else{
        script.src = 'big_clock/script.js';
        script1.src = 'big_clock/script1.js';
        script2.src = 'big_clock/script2.js';
        script3.src = 'big_clock/script3.js';
        script4.src = 'big_clock/script4.js';
    }
})();
alert(screen.availWidth);*/

//je vais copié tout mes fichier lié au dessin du canvas et crée un si et aussi entierement rendre risponsive ma montre 
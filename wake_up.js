var cut = document.querySelector('#coupé');
var delayed = document.querySelector('#retardé');
var song = document.querySelector('#song');
cut.addEventListener('click', buttonCut);
delayed.addEventListener('click', buttondelayed);
var e = true;
function buttonCut() {
    if (e) {
        song.muted = true;
        e = false;
    }
}
function buttondelayed() {
    if (e) {
        song.muted = true;
        setTimeout(del, 300000);
        function del () {
            window.open('réveil.html', '_blank', 'width = auto, height = auto');
        } 
        e = false;
    }
}
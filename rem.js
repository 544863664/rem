(function (doc, win) {
    var docEl = doc.documentElement,
    	timer = null,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = clientWidth / 23 + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,function(){
        clearTimeout(timer);
        timer = setTimeout(recalc,30);
    },false);
    win.addEventListener('pageshow',function(e){
        if(e.persisted){
            clearTimeout(timer);
            timer = setTimeout(recalc,30);
        }
    },false);
    doc.addEventListener('DOMContentLoaded', recalc, false); 
})(document, window);
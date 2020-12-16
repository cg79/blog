var t = 0;

document.onmousemove = function (e) {
    if (t) {
        return;
    }
    console.log('mouse move -->',new Date());
    t = setTimeout(() => {
    	clearTimeout(t);

        e = e || window.event;
        x = e.clientX;
        y = e.clientY;

        var el = elementAtMousePosition(x,y);
        const style = getComputedStyle(el)
        console.log(style);

        t= 0;
    }, 2000);

};

function elementAtMousePosition(x,y) {
    return document.elementFromPoint(x, y);
}
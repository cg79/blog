

function check(n, start) {
    var p = start;
    var m = 0;

    for(var i=0;i< n;i++) {
        m = (p*p) % n;
        console.log(i, p % n, m);
        if(m ===1) {
            console.log('----------------------');
            break;
        }
        p = (p * start) % n;
    }
}
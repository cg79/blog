


Object.entries([1,2,3,8].map(el => ({el, c:el.toString(2).match(/1/gi).length })).reduce((acc, cur) => {
    if(!acc[cur.c]) {
        acc[cur.c] = [];
    }
    acc[cur.c].push(cur.el); 
    return acc;

}, {})).sort((a,b) => parseInt(a[0]) > parseInt(b[0]) ? -1: 1 ).reduce((acc, el) => {

    acc = acc.concat(el[1].sort((a,b) => a>b? -a:1 ));
    return acc;

}, [])
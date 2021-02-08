var arr = [8, 15, 25, 7]
createTimeoutFunc = function (i) {
    console.log('timp ' + i)
    setTimeout(() => {
        console.log(new Date());
        if (i < arr.length - 1) {
            createTimeoutFunc(i + 1);
        }
    }, arr[i] * 1000)
}

for (var i = 0; i < arr.length; i++) {
    createTimeoutFunc(arr[i]);
}


createT = function (timp, callback) {
    setTimeout(() => {
        console.log('hi');
        callback();
    }, timp)
}
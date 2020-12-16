function printArri(arr, i) {
    setTimeout(() => {

        console.log(new Date());

        if (i === arr.length - 1) {
            return;
        }

        printArri(arr, i + 1);


    }, arr[i] * 1000)
}

function timeArr(arr) {

    var i = 0;
    printArri(arr, i);

}



////

var counter = 0;

function startTimer() {
    setTimeout(() => {
        counter = 0;
        console.log('END!');
    }, 10 * 1000)
}

function click() {
    counter++;
    if (counter === 2) {
        console.log('DBBBBBBB');
    }
}


var obj = {
    counter: 0,
    startTimer: () => {
        setTimeout(() => {
            counter = 0;
            console.log('END!');
        }, 10 * 1000)
    },
    click: () => {
        counter++;
        if (counter === 2) {
            console.log('DBBBBBBB');
        }
    }

}

//------------------------------------------------
var obj = {
    counter: 0,
    startTimer: () => {
        setTimeout(() => {
            obj.counter = 0;
            console.log('END!');
        }, 10 * 1000)
    },
    click: () => {
        obj.counter++;
        if (obj.counter === 2) {
            console.log('DBBBBBBB');
        }
    }

}

//-------

class clickChecker {
    counter = 0;

    startTimer = () => {
        setTimeout(() => {
            this.counter = 0;
            console.log('END!');
        }, 10 * 1000)
    }

    click = () => {
        //debugger;
        this.counter++;
        if (this.counter === 2) {
            console.log('DBBBBBBB');
        }
    }
}

//--------------------------------------
function funcChecker() {
    this.counter = 0;

    this.startTimer = () => {
        setTimeout(() => {
            this.counter = 0;
            console.log('END!');
        }, 10 * 1000)
    }

    this.click = () => {
        //debugger;
        this.counter++;
        if (this.counter === 2) {
            console.log('DBBBBBBB');
        }
    }
}

// with return obj

function funcChecker() {
    this.counter = 0;

    this.inc = function () {
        this.counter++;

        return this.counter;
    }

    this.reset = function () {
        this.counter = 0;

        return this.counter;
    }

    const obj = {
        startTimer: function () {
            setTimeout(() => {
                this.reset();
                console.log('END!');
            }, 10 * 1000)
        },
        click: function () {
            debugger
            this.inc();
            // if(obj.counter === 2) {
            //     console.log('DBBBBBBB');
            // }
        }

    }

    obj.click = obj.click.bind(this);

    return obj;
}


//
var input = 'ana       rrrrrrr';
var words = input.match(/\w+/gi);

var lenths = words.map(el => el.length);

var max = Math.max(...lenths)
var result = words[arr1.indexOf(max)]

////
function isPrim(n) {
    if (n === 1) {
        return false;
    }
    else
        if (n == 2) {
            return true;
        }
        else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
}


function isPrim(n) {
    if (n < 2 || n% 2 === 0 )  {
        return false;
    }

    x = 3;
    while(x < (n - 1)/2 ){
        if (n % x === 0) {
            return false;
        }
        x +=2;
    }
    return true;
}


//closure
var ccc = function() {
    var counter = 5;
    var next = function() {
        counter ++;
        return counter;    
    }

    return next;

}

//IIFE
"use strict";

function isInteger(x) {
    return (typeof x === 'number') && (x % 1 === 0);
}
Array.prototype.add = function(obj) {
            var nObj = JSON.stringify(obj);
        this.push(JSON.parse(nObj));
};
Object.prototype.clone = function(obj) {
            var nObj = JSON.stringify(obj);
        return JSON.parse(nObj);
};

// (function(utils) {
//     'use strict';

//     isInteger = function(x) {  
//         {
//             return (typeof x === 'number') && (x % 1 === 0);
//         }
//     };
// })();
var utils = (function() {

    return {
        isInteger: function(x) {
            return (typeof x === 'number') && (x % 1 === 0)
        },
        letterCapitalize: function(str) {
            str = str.replace(/\w+/g, function(x) {
                return x[0].toUpperCase() + x.substring(1, (x.length));
            });
            return str;
        },
        isLetterFct: function(input) {
            return input.length === 1 && input.match(/[a-z]/i);
        },
        reverse: function(str) {
            return str.split("").reverse().join("")
        },
        power: function(base, n, modulo) {
            if (n == 0) {
                return 1;
            }
            if (n == 1) {
                return base;
            }

            var r = base;
            var power = 1;
            while (power * 2 < n) {
                r = (r * r) % modulo;
                power = power * 2;

            }
            n = n - power;
            var newR = this.power(base, n, modulo);
            return (r * newR) % modulo;
        },
        baseConversion: function(n, base) {
            if (base < n) // see if it's time to return
                return new String("" + base); // ""+M makes a string out of a digit
            else {
                return this.baseConversion(n, base / n >> 0) +
                    new String("" + (base % n)); // continue
            }
        },

        baseConversionNegative: function(n, base) {
           

            function powerGreater(n, base) {
                var i = 0;
                var p = 1;
                while (p < n) {
                    p = p * base;
                    i++;
                }
                return {
                    p: i,
                    r: p - n
                };
            }

            function powerSmaller(n, base) {
                if (n < base) {
                    return {
                        p: 0,
                        r: n,
                        m: n
                    };
                }
                if (n == base) {
                    return {
                        p: 1,
                        r: 0,
                        m: 1
                    };
                }
                var i = 0;
                var p = base;
                var ls = p;
                while (p < n) {
                    p = p * base;
                    if (p < n) {
                        ls = p;
                    }
                    i++;
                }
                var multiplier = 1;
                while (ls * (multiplier + 1) <= n) {

                    multiplier++;
                }
                ls = ls * multiplier;

                return {
                    p: i,
                    r: n - ls,
                    m: multiplier
                };
            }

            var response = [];
            if (n == 0) {
                return {
                    p: 0,
                    r: 0
                };
            }
            if (n == 1) {
                return {
                    p: 0,
                    r: 1
                };
            }
            var r = powerGreater(n, base);
            var i = 0;
            while (r.p != 0) {
                if (i == 0) {
                    for (var k = 0; k < r.p; k++) {
                        response.push(0);
                    }
                    response.push(1);
                } else {
                    response[r.p] = r.m;
                }
                i++;
                r = powerSmaller(r.r, base);
            }
            if (r.r != 0) {
                response[r.p] = r.r;
            }

            return response.reverse();
        },

        horseMoves: function(start, end) {
            // x
            // 2
            // 1 2 y
            function equalPoints(a, b) {
                return a.x == b.x && a.y == b.y;
            }

            function distance(a, b) {
                return {
                    x:  b.x-a.x,
                    y:  b.y-a.y,
                };
            }

            function isValidPosition(a) {
                return (a.x > 0 && a.y > 0 && a.x < 9 && a.y < 9);
            }

            function trymove(horsePosition, direction) {
                // x & y      
                // 2    
                // -2
                // -1  1
                var nObj = JSON.stringify(horsePosition);
                var horse = JSON.parse(nObj);
                switch (direction.x) {
                    case 2: //up
                        {
                            horse.x = horse.x + 2;
                            switch (direction.y) {
                                case 1: //right
                                    {
                                        horse.y = horse.y + 1;
                                        break;
                                    }
                                case -1: //left
                                    {
                                        horse.y = horse.y - 1;
                                        break;
                                    }
                            }
                            break;
                        }
                    case -2: //down
                        {
                            horse.x = horse.x - 2;
                            switch (direction.y) {
                                case 1:
                                    {
                                        horse.y = horse.y + 1;
                                        break;
                                    }
                                case -1:
                                    {
                                        horse.y = horse.y - 1;
                                        break;
                                    }
                            }
                            break;
                        }
                    case 1: //right
                        {
                            horse.y = horse.y + 2;
                            switch (direction.y) {
                                case 1:
                                    {
                                        horse.x = horse.x + 1;

                                        break;
                                    }
                                case -1:
                                    {
                                        horse.x = horse.x - 1;
                                        break;
                                    }
                            }
                            break;
                        }
                    case -1: //left
                        {
                            horse.y = horse.y - 2;
                            switch (direction.y) {
                                case 1:
                                    {
                                        horse.x = horse.x + 1;
                                        break;
                                    }
                                case -1:
                                    {
                                        horse.x = horse.x - 1;
                                        break;
                                    }
                            }
                            break;
                        }
                }

                return horse;
            }

            function move(start, end, paths) {
                var dist = distance(start, end);
                var candidate = start;

                if (dist.x == 0 && dist.y == 0) {
                    paths.add(start);
                    return start;
                }

                if (dist.x == 0) {
                    var moduloY = dist.y;
                    var dir = "right";
                    if (dist.y < 0) {
                        dir = "left";
                        moduloY = (-1) * moduloY;
                    }
                    var canMoveUp = start.x < 7;
                    var canMoveDown = start.x > 2;
                    var canMoveLeft = start.y > 2;
                    var canMoveRight = start.y < 7;

                    switch (dist.y) {
                        case 1:
                            {
                                if (canMoveUp) {
                                    if (canMoveRight) {
                                        candidate = trymove(candidate, {
                                            x: 2,
                                            y: 1
                                        }); paths.add(candidate);

                                        candidate = trymove(candidate, {
                                            x: 1,
                                            y: -1
                                        }); paths.add(candidate);

                                        candidate = trymove(candidate, {
                                            x: -1,
                                            y: -1
                                        }); paths.add(candidate);
                                        return candidate;
                                    } else {
                                        candidate = trymove(candidate, {
                                            x: 2,
                                            y: -1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: -1,
                                            y: -1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: 1,
                                            y: -1
                                        });paths.add(candidate);
                                    }
                                } else {
                                    if (canMoveRight) {
                                        candidate = trymove(candidate, {
                                            x: 1,
                                            y: -1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: -1,
                                            y: -1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: 1,
                                            y: -1
                                        });paths.add(candidate);
                                    } else {
                                        candidate = trymove(candidate, {
                                            x: -2,
                                            y: -1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: -1,
                                            y: 1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: 1,
                                            y: 1
                                        });paths.add(candidate);
                                    }
                                }
                                break;
                            }
                        case 2:
                            {
                                 if (canMoveUp) {
                                    if (canMoveRight) {
                                        candidate = trymove(candidate, {
                                            x: 2,
                                            y: 1
                                        });paths.add(candidate);

                                        candidate = trymove(candidate, {
                                            x: -2,
                                            y: 1
                                        });paths.add(candidate);
                                    } else {
                                        candidate = trymove(candidate, {
                                            x: 2,
                                            y: -1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: -2,
                                            y: -1
                                        });paths.add(candidate);
                                    }
                                } else {
                                     if (canMoveRight) {
                                        candidate = trymove(candidate, {
                                            x: -2,
                                            y: 1
                                        });paths.add(candidate);

                                        candidate = trymove(candidate, {
                                            x: 2,
                                            y: 1
                                        });paths.add(candidate);
                                    } else {
                                        candidate = trymove(candidate, {
                                            x: -2,
                                            y: -1
                                        });paths.add(candidate);
                                        candidate = trymove(candidate, {
                                            x: 2,
                                            y: -1
                                        });paths.add(candidate);
                                    }
                                }
                                break;
                            }
                        case 3:{
                                if (canMoveRight) {
                                    move(candidate,{x:start.x,y:start.y+1},paths);
                                    move(paths[paths.length-1],end,paths);
                                }else{
                                    move(candidate,{x:start.x,y:start.y-1},paths);
                                    move(paths[paths.length-1],end,paths);
                                }
                                break;
                            }
                        case 4:{
                                if (canMoveRight) {
                                    move(candidate,{x:end.x,y:end.x+2},paths);
                                    move(paths[paths.length-1],end,paths);
                                }else{
                                    move(candidate,{x:end.x,y:end.x-2},paths);
                                    move(paths[paths.length-1],end,paths);
                                }
                                break;
                            }
                            case 5:{
                                if (canMoveRight) {
                                    move(candidate,{x:end.x,y:end.x+3},paths);
                                    move(paths[paths.length-1],end,paths);
                                }else{
                                    move(candidate,{x:end.x,y:end.x-3},paths);
                                    move(paths[paths.length-1],end,paths);
                                }
                                break;
                            }
                            case 6:{
                                if (canMoveRight) {
                                    move(candidate,{x:end.x,y:end.x+3},paths);
                                    move(paths[paths.length-1],end,paths);
                                }else{
                                    move(candidate,{x:end.x,y:end.x-3},paths);
                                    move(paths[paths.length-1],end,paths);
                                }
                                break;
                            }
                            case 7:{
                                if (canMoveRight) {
                                    move(candidate,{x:end.x,y:end.x+4},paths);
                                    move(paths[paths.length-1],end,paths);
                                }else{
                                    move(candidate,{x:end.x,y:end.x-4},paths);
                                    move(paths[paths.length-1],end,paths);
                                }
                                break;
                            }
                    }
                }

                if (dist.y == 0) {

                }
                if (dist.x < 0) {

                }


            }

            var paths = [];
            paths.push(start);

            move(start, end,paths);

            return paths;
        }
    }

}())


// (function(namespace) {

//   namespace.Utils = {
//     test: function() {
//       console.log('test');
//     },
//     test1: function() {
//       console.log('test1');
//     },
//     isInteger = function(x) { /* oops, an assignment instead of a declaration */
//         {
//             return (typeof x === 'number') && (x % 1 === 0);
//         }
//     }
//   };

// }(this.namespace = this.namespace || {}));

//namespace.Utils.test(); // test

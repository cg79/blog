function sumOfNUmbersFromArray(arr) {
    debugger;
    let sum = 0;
    for(let i = 0; i< arr.length; i++ ) {
        console.log(i, arr[i]);
        sum += arr[i];
    }
    return sum;
}

function sumOfNUmbersFromArrayEach(arr) {
    debugger;
    let sum = 0;
    arr.forEach(el => sum += el);
    return sum;
}

var sumOfNUmbersFromArrayReduce = (arr) => arr.reduce((acc, el) => acc+= el, 0);

var x = sumOfNUmbersFromArray([3,4]);
console.log(x);

/////////////

function toogle (door) {
    if (door === 'open') {
        console.log("The door is " + door + " !");
    }else if (door ==='close'){
        console.log("The door is " + door + " !");
    }else {
        console.log('The door is closed !');
    }
} 

function toogle_1 (door) {
    if (door === 'open') {
        console.log("The door is " + door + " !");
    }else {
        if (door ==='close'){
            console.log("The door is " + door + " !");
        }else {
            console.log('The door is closed !');
        }
    }
} 


toogle('dsjbhjfhf');

function toogle1 (door) {
    if(!(door === 'open') && !(door === 'close') ) {
        console.log('The door is state 1 !');
    }

    if (door === 'open') {
        console.log("The door is " + door + " !");
        return;
    }

    console.log("The door is closed ==>" + door + " !");
} 


function isAdultV1(age) {
      if(age>= 18)  {
          return true;
      } else {
          return false;
      }
}

function isAdultV2(age) {
    if(age>= 18)  {
        if(cond) {
            asd
        } else {

        }
    } 
    return false;
}

function isAdultV3(age) {
    return age>= 18 ? {
    }: {

    };
}

////////////////////////// while
function listeaza(arr) {
    var i = 0;
    while(i< arr.length) {
        console.log(i);
        i++;
    }

}





let removeCharAndReverse = (input, char) => input.split('').filter(el => el !== char).reverse().join('');

function removeCharAndReverse1 (input, char) {
    var characters = input.split('');
    var arrayWithoutChar = characters.filter(el => el !== char);
    
    return arrayWithoutChar.reverse();
}
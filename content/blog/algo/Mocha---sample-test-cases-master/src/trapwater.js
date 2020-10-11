Array.prototype.seek = function () {
    return this[this.length - 1] || 0;
  };


var goRight = function(arr,i) {
    var el = arr[i];
    if(el === undefined) {
        return i;
    }

    while(arr[i+ 1] !== undefined && arr[i+1]> arr[i] ) {
        i++;
    }

    return i;

}

var createStack = function(arr,i) {
    var startValue = arr[i];
    var stack = [startValue];
    if(arr[i+1] === undefined) {
        return  {stack, i: i+1};
    }
    while(arr[i+1] !== undefined && arr[i+1] < startValue) {
        stack.push(arr[i+1]);
        i++
    }

    if(arr[i+1] !== undefined) {
        stack.push(arr[i+1]);
        i++;
    }

    return {stack, i};
}

var calculateWaterFromStack = function(stack) {
    var sum = 0;
    var min = Math.min(stack[0], stack.seek());
    if(min === 0) {
        return 0;
    }
    var i = 1;
    while(i< stack.length-1) {
        if(stack[i]< min) {
            sum += (min - stack[i])
        }


        i++;
    }

    return sum;
}


var trap_0 = function(arr) {
    var sum = 0;

    var i = goRight(arr, 0);
    console.log('i0', i);


    var stack_i = createStack(arr,i);
    i = stack_i.i;
    console.log('stack0', stack_i);

    sum += calculateWaterFromStack(stack_i.stack);

debugger;
    var count = 0;
    while(i< arr.length) {
        count ++;
        if(count === 6) return -1;

        i = goRight(arr, i);
        console.log('i0', i);

        stack_i = createStack(arr,i);
        i = stack_i.i;
        console.log('stack0', stack_i);

        sum += calculateWaterFromStack(stack_i.stack);

    }

        
    return sum;
};

var trap = function(heights) {
        debugger;
    if ( heights.length <= 2 ) { return 0; }
    
    var left = 0;
    var right = heights.length-1;
    var totalArea = 0;

    var leftMaxHeight = heights[left]; 
    var rightMaxHeight = heights[right];
    
    while ( left < right ) {
        if ( heights[left] < heights[right] ) {
            leftMaxHeight = Math.max(leftMaxHeight, heights[++left]);
            totalArea += leftMaxHeight-heights[left];
        } else {
            rightMaxHeight = Math.max(rightMaxHeight, heights[--right]);
            totalArea += rightMaxHeight-heights[right];
        } 
    }
    return totalArea;
}


module.exports = {trap, calculateWaterFromStack};
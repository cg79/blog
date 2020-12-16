function Car() {
    this.speed = 120;
}

Car.prototype.getSpeed = () => {
    return this.speed;
}

var car = new Car();
car.getSpeed(); // TypeError
//
//Inside the getSpeed() method, the this value reference the global object, 
//not the Car object. 
//Therefore the car.getSpeed() invocation causes an error because the global object does not have the speed property

var a = function() {
    this.val = 8;
    this.add = function() {
        this.val ++;
        return this.val;
    }
    var obj = {
        add1: function() {
            debugger;
            this.add();
        }
    }
    return obj;
}
const R = require('ramda');

//First task
Array.prototype.myMap = function(callback, thisArg) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            arr.push(callback.call(thisArg, this[i], i ,this));
        }
    }
    return arr;
};


//Second task
Array.prototype.myReduce = function(callback, initialVal) {
    let accumulator = (initialVal === undefined) ? undefined : initialVal;
    if (accumulator == undefined) {
        accumulator = 0;
    }
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        }
    }
    return accumulator;
};

//Third task
function multiply(a) {
    let currentMul = a;

    function f(b) {
      currentMul *= b;
      return f;
    }

    f.toString = function() {
      return currentMul;
    };

    f.value = f;
    return f;
}

//Fourth task - Multiply(x)(y) with Ramda
R.multiply(7)(10);
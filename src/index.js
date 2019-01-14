const R = require('ramda');

let arr = [-1,7,9];

//First task
Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

//Second task
Array.prototype.myReduce = function(callback, initialVal) {
    var accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

//Third task
function multiply(x) {
    return function(y) {
        return (typeof y !== 'undefined') ?  x*y :  x;
    }
}


arr.myMap((item)=> item*2);
let myReduceResult = arr.myReduce((sum, current) => {return sum + current});

multiply(4)(4);

//Fourth task - Multiply(x)(y) with Ramda
R.multiply(7)(10);
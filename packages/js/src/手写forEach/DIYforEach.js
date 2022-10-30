const arr = [1, 2, 3];

Array.prototype.DIYforEach = function (callback) {
    if (typeof callback === "undefined") {
        throw new Error("undefined is not a function");
    } else if (typeof callback !== "function") {
        throw new Error('the callback must be a function')
    }
    for (let i = 0; i < this.length; i++) {
        callback.call(this, this[i], i, this); // this：arr, this[i]: element, 
    }
};

arr.DIYforEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
});

// arr.DIYforEach()
arr.DIYforEach([1,2])
arr.DIYforEach({a:1})

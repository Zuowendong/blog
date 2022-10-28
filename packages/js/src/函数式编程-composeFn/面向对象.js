function ClacNumber(number) {
    this.number = number;
}

ClacNumber.prototype.clac = function (number) {
    return (number + 1 - 2) * 3;
};

const c1 = new ClacNumber(10)
console.log(c1.clac(10))  // 27
function addOne(num) {
    return num + 1;
}
function minusTwo(num) {
    return num - 2;
}
function multiplyThree(num) {
    return num * 3;
}

let result = addOne(10)
result = minusTwo(result)
result = multiplyThree(result)
console.log(result)

// 痛点，多次调用麻烦
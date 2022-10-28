function addOne(num) {
    return num + 1;
}
function minusTwo(num) {
    return num - 2;
}
function multiplyThree(num) {
    return num * 3;
}

function composeFn() {
    const args = Array.from(arguments)
    return function(num) {
        return args.reduceRight((res, cb) => cb(res), num)  // 组合函数，从右向左调用
    }
}
const result = composeFn(multiplyThree, minusTwo, addOne)(10)
console.log(result)
手写forEach

原生forEach的使用，高阶函数的使用，在函数内部传入一个函数

````js
const arr = [1,2,3]
arr.forEach((element, index, array) => {
    console.loeg(element)
    console.loeg(index)
    console.loeg(array)
})
````
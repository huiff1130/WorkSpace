/**
 * @desc 创建一个新数组，结果是该数组中的每个元素调用一次提供的函数后的返回值
 *       Array.map(currentValue,index,array)   
 *       currentValue:必须，当前元素值  
 *       index：可选：必须，当前元素的索引值 
 *       array:可选，当前元素属于的数组
 * @param {*} fn 
 */

//方法一  this指向调用newMap方法的数组
Array.prototype.defineMap = function (fn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i))
    }
    return result
}

//方法二 Array.reduce()
Array.prototype.defineMap2 = function (fn, Arg) {
    let result = []
    this.reduce((acc, curr, index, arr) => {
        result.push(fn.call(acc, curr, index, arr));
    }, 0)
    return result
}

let numbers = [1, 2, 3, 4];
let result = numbers.defineMap(ele => ele + 2)
console.log(result);
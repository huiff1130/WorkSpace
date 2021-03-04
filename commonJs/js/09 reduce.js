/**
 * 
 * @desc  对数组中的每个元素执行一个reduce函数(升序执行)，将其结果汇总为单个返回值
 *        arr.reduce(fucntion(acc,curr,index,arr),initialValue)  
 *        acc:上一次调用回调时返回的累积值  curr:当前元素   index：当前元素索引  
 *        arr：调用reduce()的数组 
 *        initialValue：可选，作为第一次调用 callback函数时的第一个参数的值。如果没有初始值，则使用数组中的第一个元素
 * @param {*} fn 
 * @param {*} base 
 */
Array.prototype.defineReduce = function (fn, prev) {
    for (let i = 0; i < this.length; i++) {
        if (typeof prev == 'undefined') {
            prev = fn(this[i], this[i + 1], i + 1, this);
            ++i
        } else {
            prev = fn(prev, this[i], i, this)
        }
    }
    return prev;
}


let sum = [1, 2, 3].defineReduce((acc, curr) => {
    return acc + curr
});
console.log(sum);


//计算每个元素出现次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++
    } else {
        allNames[name] = 1
    }
    return allNames
}, {});


//1.数组去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (acc, cur) {
    if (acc.indexOf(cur) === -1) {
        acc.push(cur)
    }
    return acc;
}, [])


//2.数组去重
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce(function (acc, cur) {
    if (acc.length === 0 || acc[acc.length - 1] !== cur) {
        acc.push(cur)
    }
    return acc;
}, [])


//3.数组去重
let result2 = Array.from(new Set(arr))


//4.数组去重合并
function combine() {
    let result = [].concat.apply([], arguments)
    return Array.from(new Set(result))
}
var m = [1, 2, 3],
    n = [2, 3, 4];
//console.log(combine(m, n));
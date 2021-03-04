/**
 * @desc 创建一个新数组，其包含通过所提供函数实现的测试的所有元素
 *       Array.filter(element,index,array,thisArg)
 *       element:当前正在处理的元素
 *       index：正在处理的元素的索引
 *       array：调用了filter的数组本身
 *       thisArg：执行callback时，用于this的值
 * @param {*} fn 
 * @param {*} context 
 */
Array.prototype.defineFilter = function (fn) {
    if (typeof fn == 'function') {
        let arr = this
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            let result = fn(arr[i], i, arr)
            if (result) temp.push(arr[i]);
        }
        return temp;
    }
}


let arr = [1, 2, 3]
let result = arr.defineFilter(ele => ele > 2, )
console.log(result);
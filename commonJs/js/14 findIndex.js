/**
 * @desc 返回数组中满足提供的测试函数的第一个元素的索引
 *       Array.findIndex(element, index, arr, thisArg)
 *       element:当前元素
 *       index：当前索引
 *       arr：数组本身
 *       thisArg：执行callback时作为this对象的值
 * @param {*} fn 
 */
Array.prototype.defineFindIndex = function (fn) {
    if (typeof fn == 'function') {
        for (let i = 0; i < this.length; i++) {
            if (fn(this[i], i, this)) {
                return i
            }
        }
    }
    return -1
}

let arr = [1, 2, 3, 4, 5]
let res = arr.defineFindIndex(ele => ele == 3)
console.log(res);
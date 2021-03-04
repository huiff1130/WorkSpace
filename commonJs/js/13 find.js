/**
 * @desc :返回数组中通过提供的测试函数的第一个元素的值。负责返回undefined
 *        Array.find(element, index, arr, thisArg)
 *        element:当前正在处理的元素
 *        index：当前元素的索引
 *        arr：数组本身
 *        thisArg：执行回调时用作this的对象
 * @param {*} fn 
 */
Array.prototype.defineFind = function (fn) {
    if (typeof fn == 'function') {
        for (let i = 0; i < this.length; i++) {
            let hasFind = fn(this[i], i, this)
            if (hasFind) return this[i]
        }
    } else {
        return undefined
    }
}

let inventory = [{
        name: 'apples',
        quantity: 2
    },
    {
        name: 'bananas',
        quantity: 0
    },
    {
        name: 'cherries',
        quantity: 5
    }
];

let arr = [1, 2, 3, 4]
let result = arr.defineFind((ele, index, arr, arg) => ele > 2)
console.log(result);
/* let res = inventory.defineFind((ele, index, arr, arg) => ele.name === 'cherries')
console.log(res); */
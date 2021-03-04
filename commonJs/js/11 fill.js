/**
 * @desc 用一个固定值填充一个数组中从起始索引到终止索引内的所有元素，不包括终止索引
 *       Array.fill(value, start, end) 
 *       value:填充数组的值
 *       start：起始索引，默认为0
 *       end:   终止索引,默认为this.length  
 * @param {*} value 
 * @param {*} start 
 * @param {*} end 
 */
Array.prototype.defineFill = function (value, start, end) {
    end = end || this.length
    let _this = this
    for (let i = start; i < end; i++) {
        _this[i] = value;
    }
    return _this
}
let arr = [1, 2, 3, 4]
let result = arr.defineFill(6, 1)
console.log(result);
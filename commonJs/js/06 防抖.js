/**
 * @desc  实现函数的防抖：目的是频繁触发中只触发一次；
 *         在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 * @param {@} fn 需要执行的参数
 * @param {*} delay 防抖的间隔频率
 */

function debounce(fn, delay) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}

let flag = 0

function foo() {
    flag++
    console.log('---------' + flag);
}
debounce(foo, 300)
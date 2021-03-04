/**
 * @desc 节流：频繁触发中缩减频率
 *       规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。稀释事件执行频率。
 * @param {*} func 执行的函数
 * @param {*} delay 节流的间隔频率
 */
function throttle(func, delay) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(function () {
                func.applay(context, args)
                timer = null
            }, delay)
        }
    }
}

/**
 * @desc 利用steTimeout实现setInterval
 * @param {*} fn 执行的函数
 * @param {*} delay  时间间隔
 */
function defineSetInterval(fn, delay) {
    function interval() {
        //异步,到了间隔时间,异步被执行，进入循环递归
        setTimeout(interval, delay);
        //同步
        fn()
    }
    setTimeout(interval, delay)
}


let index = 0;

function test() {
    console.log(index);
    ++index
}

defineSetInterval(test, 1000)

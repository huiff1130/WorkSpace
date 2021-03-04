/**
 * @desc promise 实现sleep函数:  某个时间过后，就去执行某个函数，基于Promise封装异步任务
 * @param delay 等待时间
 */
function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
}

const sayHello = name => console.log(`Hello ${name}`);
async function autoRun() {
    sayHello('one')
    await sleep(2000);
    sayHello('two')
    await sleep(2000);
    sayHello('three')
}
autoRun()

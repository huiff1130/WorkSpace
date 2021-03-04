/**
 * @desc Promise.all(iterable) 返回一个promise实例,在任意一个传入的promise失败是返回失败。
 *       iterable:可迭代对象
 *       把一个包含iterable对象里所有promise返回值的数组作为成功回调的返回值
 */
const isPromise = val => typeof val.then === 'function'

function defineAll(promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        let index = 0
        const processData = function (key, data) {
            arr[key] = data;
            if (++index == promises.length) {
                resolve(arr)
            }
        }
        for (let i = 0; i < promises.length; i++) {
            let data = promises[i]
            if (isPromise(data)) {
                data.then(value => {
                    processData(i, value)
                }, reject)
            } else {
                processData(i, data)
            }
        }
    })
};
const promise1 = Promise.resolve(1);
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'two')
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'one')
})

//const promise4 = Promise.reject('error')

defineAll([promise1, promise2, promise3]).then(values => {
    console.log(values);
}, err => {
    console.log(err);
})

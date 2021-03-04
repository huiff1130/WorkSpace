/**
 * @desc Promise.race(iterable) 返回一个promise,一旦迭代器中的某个promise解决或拒绝，返回的promise就会解决或拒绝
 */
function defineRace(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'two');
});

defineRace([promise1, promise2]).then(values => {
    console.log(values);
}).catch(reason => {
    console.log(reason);
}).finally(() => {
    console.log(12);
});

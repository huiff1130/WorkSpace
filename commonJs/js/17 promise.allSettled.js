/**
 * @desc 返回一个在所有给定的promise都已经fulfilled 或 rejected 后的promise，并带有一个对象数组，每个对象表示对应的promise结果
 * @param {*} val 
 */
const isPromise = val => typeof val.then === 'function'

function defineAllSettled(promises) {
    return new Promise((resolve, reject) => {
        let arr = [];
        let index = [];
        const processData = function (key, data) {
            arr[key] = data;
            if (++index == promises.length) {
                resolve(arr)
            }
        }
        for (let i = 0; i < promises.length; i++) {
            if (isPromise) {
                promises[i].then(res => {
                    processData(i, {
                        status: 'fulfilled',
                        value: res
                    })
                }).catch(err => {
                    processData(i, {
                        status: 'rejected',
                        value: err
                    })
                })
            } else {
                processData(i, {
                    status: 'fulfilled',
                    value: promises[i]
                })
            }
        }
    })
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'foo'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'OK'));
const promises = [promise1, promise2, promise3];

defineAllSettled(promises).
then((results) => results.forEach((result) => console.log(result.status)));
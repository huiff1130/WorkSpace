/**
 * @desc Promise.finally 返回一个promise,结果无论是fulfilled还是rejected,都会执行指定的回调函数
 */

//源码
Promise.prototype.defineFinally = function (callback) {
    return this.then(data => {
        return Promise.resolve(callback().then(() => data))
    }, err => {
        return Promise.resolve(callback().then(() => {
            throw err
        }))
    })
}


//情况一
Promise.resolve(12).finally(data => {
    // console.log(data);   //undefined
})

//情况二：相当于做了中间处理，过渡作用 
Promise.resolve(12).finally(data => {
    // console.log(data);   //undefined
}).then(res => {
    // console.log(res);   //12
})

//情况三
Promise.reject('Fail').finally(data => {
    // console.log(data); // undefined
}).then(res => {
    // console.log(res);
}).catch(err => {
    // console.log(err); //Fail
})

//情况四
Promise.resolve(123).finally(data => {
    // console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'ok')
    })
}).then(res => {
    // console.log(res);
}).catch(err => {
    //  console.log(err);
})

//情况五
Promise.resolve(123).finally(data => {
    //  console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(reject, 200, 'Error')
    })
}).then(res => {
    //  console.log(res);
}).catch(err => {
    //  console.log(err);   //123
})

//情况六
Promise.reject('Error').defineFinally(data => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 300, 'ok')
    })
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
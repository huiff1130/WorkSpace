let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

//1.普通方法 递归
function flatter() {
    let result = []
    return function flatten(arr) { //闭包
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flatten(item)
            } else {
                result.push(item)
            }
        })
        return result
    }
}



//console.log(flatter()(arr)); //函数柯里化  部分求值

//2.concat
function flatter2() {
    let result = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flattern(item))
        } else {
            result.push(item)
        }
    })
    return result
}


//3.展开运算符
function flatter3(arr) {
    let flatten = arr => [].concat(...arr)
    return flatten(arr.map(item => Array.isArray(item) ? flatter3(item) : item))
}

//console.log(flatter3(arr));

//4.join 和split组合，只适用于字符串组合
function flatter4(arr) {
    return arr.join().split(',')
}
// console.log(flatter4(arr));

//5.reduce 
function flatter5(arr) {
    return arr.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? flatter5(curr) : curr), [])
}
//console.log(flatter5(arr));

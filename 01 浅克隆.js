/**
 * @description: 浅度克隆：对于对象和数组，拷贝的是地址，他们指向同一个空间；一个对象在空间加了东西，另一个对象也会受影响。
 * 函数的克隆会在内存单独开辟一块空间，会互不影响。可应用于不包含对象（狭义的）和数组的对象之间的拷贝
 * @param {type} 
 * @return {type} 
 */
let obj = {
    name: '张三',
    age: 12,
    sex: 'male',
    getAge: function () {
        console.log(12);
    }
}
let arr1 = [10, '20', [30, 40], /\d+/, function () {}, null, undefined, {
    xxx: 'xxx'
}, Symbol('xxx'), new Date()];

const deepClone = function (target) {
    if (typeof target == 'object' && target != null) {
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop]
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
// console.log(deepClone(obj));
//console.log(deepClone(arr1));
console.log(JSON.parse(JSON.stringify(arr1)));

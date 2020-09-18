/**
 * @description: 浅对基本类型变量，浅拷贝是对值的拷贝，没有深拷贝的概念。
 *  对引用类型来说，浅拷贝是对对象地址的拷贝，并没有开辟新的栈，复制的结果是两个对象指向同一个地址，修改其中一个对象的属性，另外一个对象的属性也会改变， 而深拷贝则是开辟新的栈。
 * @param : 克隆目标
 * @return ：克隆结果
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

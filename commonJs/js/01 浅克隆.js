/**
 * @description: 对基本类型变量，浅拷贝是对值的拷贝，没有深拷贝的概念。
    对引用类型来说，浅拷贝是对对象地址的拷贝，并没有开辟新的栈，复制的结果是两个对象指向同一个地址，修改其中一个对象的属性，另外一个对象的属性也会改变， 
    而深拷贝则是开辟新的栈。两个对象对应两个不同的地址
 * @param {type} 
 * @return {type} 
 */

//1.Array.concat()  返回一个新的数组
let c1 = [{
    name: 'java'
}];
let c2 = [{
    name: 'html'
}]
let c = c1.concat(c2)
// console.log(c);
c1[0].name = 'css'
// console.log(c);


//2.Object.assign  用于所有可枚举的属性的值从一个或多个源对象复制到目标对象，返回目标对象
let a1 = {
    name: '张三',
    child: {
        name: '张四'
    }
}

let a2 = {
    age: '13'
}
let a = Object.assign(a1, a2)
console.log(a);
a1.name = '李四'
console.log(a);

//3.自定义方法
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
// console.log(JSON.parse(JSON.stringify(arr1)));
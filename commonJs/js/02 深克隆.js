/**
 * @description: 深拷贝
 * @param {type} 
 * @return {type} 
 */

//1. JSON.parse(JSON.stringify(str))
let s1 = {
    name: '张三',
    age: 18,
    child: {
        name: '李四',
        age: 20
    }
}
let s = JSON.parse(JSON.stringify(s1))
// console.log(s);

s1.child.name = '张五'
// console.log(s);


//自定义 递归
let obj = {
    name: '张三',
    age: 12,
    sex: 'male',
    reg: /\d+/,
    getAge: function () {
        console.log(12);
    },
    date: new Date()
}

let arr1 = [10, '20', [30, 40], /\d+/, function () {}, null, undefined, {
    xxx: 'xxx'
}, Symbol('xxx'), new Date()];


//map  
const isObject = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

const deepClone = function (target, map = new Map()) {
    if (map.get(target)) {
        return target
    }
    let constructor = target.constructor.name.toLowerCase()
    if ('regexp' == constructor) {
        return new RegExp(target).valueOf();
    } else if ('date' == constructor) {
        return new Date(target).valueOf();
    }
    if (isObject(target)) {
        map.set(target, true)
        const targetClone = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                targetClone[prop] = deepClone(target[prop], map)
            }
        }
        return targetClone
    } else {
        return target
    }
}
let res = deepClone(obj)
console.log(res);
obj.name = '李四'
console.log(res);


const deepClone3 = value => {
    //小写驼峰
    const headToLowerCase = v => v.replace(/(^[A-Z])/g, (m, p1) => p1.toLowerCase())
    //类型
    const is = (val, compareType) => {
        const type = Object.prototype.toString.call(val)
            .replace(/^(\[object+\s])(\S]+)(\]$)/g, (m, p1, p2 => headToLowerCase(p2)));
        return compareType ? (headToLowerCase(compareType) === type) : type;
    };
    const type = is(value);
    const actions = {
        string: val => new String(val).valueOf(),
        number: val => new Number(val).valueOf(),
        boolean: val => new Boolean(val).valueOf(),
        null: val => null,
        undefined: val => undefined,
        array: val => Map(item => deepClone(item)),
        object: val => Object.entries(val).reduce((pre, [k, v]) => ({
            pre,
            [k]: deepClone(v)
        }), {}),
        regexp: val => new RegExp(val).valueOf(),
        date: val => new Date(val).valueOf(),
        htmlBodyElement: val => val.cloneNode(),
        default: val => val
    }
    const action = actions[type] || action.default
    return action(value)
}

// console.log(deepClone(obj));
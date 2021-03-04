/**
 * @desc bind():改变函数内this的指向，会创建一个新函数，称为绑定函数(构造函数的绑定函数)，bind() 被调用时，
 * 这个新函数的 this 被指向 bind() 的第一个参数。而其余参数将作为新函数的参数，供调用时使用
 * @param {*} context 绑定的上下文
 */
 Function.prototype.defineBind = function (context) {
    if (typeof this !== 'function') {
        return
    }
    let _this = this
    let args = [...arguments].slice(1)
    const temp = function () {}
    const resultFn = function () {
        let newArgs = [...arguments]
        /**
         * 如果当前函数的this指向的是构造函数的this,则判定new操作
         * 当绑定函数被当做普通函数调用，this 指向 window
         * 而当做钩子函数，却指向这个实例，this instanceof resultFn 为 true, 这个实例可以可以获取 fn() 的值
         */
        return _this.apply(this instanceof resultFn ? this : (context || window), args.concat(newArgs))
    }
    temp.prototype = this.prototype
    resultFn.prototype = new temp()
    return resultFn
}



let Person = {
    name: '张三',
    age: 18,
}

function getName(age, sex) {
    this.child = '李五'
    console.log(`name:${this.name} ,age:${age},sex:${sex}`);
}


let setName = getName.defineBind(Person, 12, 'woman')
setName('woman')
/* let newSetName = new setName('man')
setName.prototype.number = '12';
console.log(newSetName.number);  */

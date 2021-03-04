/**
 * @desc instanceof运算符：用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 *       object instanceof constructor
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 */
function defineInstanceOf(obj, constr) {
    let constructor = constr.prototype;
    let proto = Object.getPrototypeOf(obj); //当前实例对象的原型链属性
    while (true) {
        if (proto == null) {
            return false
        }
        if (proto == constructor) {
            return true
        }
        // 沿着原型链__ptoto__一层一层向上查找
        proto = Object.getPrototypeOf(proto)
    }
}


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998);


console.log(defineInstanceOf(auto, Car));

/**
 * @desc 创建一个新的对象，使用现有的对象来提供新建的对象的__proto__,
 * @param {*} proto 
 */
function defineCreate(proto) {
    if (proto != null && typeof proto == 'object') {
        const temp = function () {}
        // 将原型挂在构造函数的prototype上
        temp.prototype = proto;
       // temp.prototype.constructor = temp;
        return new temp();
    }
}

const obj = {
    name: 'Bob',
    show: function () {
        console.log(this.name);
    }
};
const obj2 = defineCreate(obj)
obj2.show()
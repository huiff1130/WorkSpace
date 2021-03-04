/**
 * @desc 1.创建一个新的空对象，将它的引用赋给this，继承函数的原型。
 *       2.通过this将属性和方法添加至这个对象。
 *       3.最后返回this指向的新对象。
 */
function defineNew() {
    let constructor = [].shift.call(arguments);
    let obj = Object.create(constructor.prototype)
    /*  let obj = {}
     obj._proto_ = constructor.prototype */
    let result = constructor.apply(obj, arguments)
    //如果构造函数没有手动返回对象，则返回第一步的对象
    let res = (result !== null && typeof result == 'object') ? result : obj
    return res
}
function Person(name, age) {
    this.name = name
    this.age = age
   /*  let that = {}
    that.name2 = '12'
    return that */
}
Person.prototype.show = function () {
    console.log(this.name, this.age);
}
let person = defineNew(Person, 'Alice', '18');
console.log(person.name2);
/* console.log(person.__proto__ == Person.prototype); */
/* person.show(); */
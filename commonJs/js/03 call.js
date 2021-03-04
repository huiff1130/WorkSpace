/**
 * @desc call():调用一个对象的方法，用另一个对象替换当前对象，可以继承另一个对象的属性
 * 可用于重新定义函数的执行环境，也就是this的指向；call和apply都是为了改变某个函数运行时的context，即上下文而存在的。
 * call, apply, bind: 
 * 共同点：修改this指向 
 * 区别:   1.call() 和 apply() 立刻执行，bind() 返回一个函数
 *         2.call() 可以传递多个参数，第一个参数和 apply() 一样，是用来替换的对象，后面的是参数列表
 *         3.apply() 最多只能有两个参数， this对象和数组array
 */
Function.prototype.defineCall = function (context) {
    context = context || window
    context.fn = this;
    let args = [...arguments].slice(1)
    let result = context.fn(args.join(','))
    delete context.fn
    return result
}

let getName = function (age) {
    console.log(`name:${this.name} ,age:${age}`);
}
let obj = {
    name: '张三'
}
getName.defineCall(obj, 12)
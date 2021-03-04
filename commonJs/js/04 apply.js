Function.prototype.defineApply = function (context, arr) {
    context = context || window
    context.fn = this
    let result;
    if (!arr) {
        result = context.fn()
    } else {
        /* let args = []
        for (let i = 0; i < arr.length; i++) {
            args.push(arr[i])
        }
         result = args.fn(arr.join(','))
        */
        result = context.fn(arr.join(','))
    }
    delete context.fn
    return result
}

let Person = {
    name: '张三',
    age: 18,
    getName: function (age) {
        console.log(`name:${this.name} ,age:${age}`);
    }
}

let obj = {
    name: ['Tom', 'Johy', 'Joe', 'David']
}

Person.getName.defineApply(obj, [12, 15, 117])
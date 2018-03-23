// 1.私有属性与私有方法，特权方法，对象公有属性和对象公有方法，构造器
var one = (function () {
    var Test1 = function (name,age) { 
        // 私有属性
        var privateObj = 'privateObj'
        // 私有方法
        var privateFn = function () { 
            console.log(privateObj)
        }
        // 对象公有方法
        this.getName = function () { 
            console.log(name)
        }
        // 对象公有属性
        this.age = age
    }
    // 公有属性
    Test1.tip = 'publicObj'
    // 公有方法
    Test1.display = function () {
        console.log(this.tip)
    }
    test11 = new Test1('peter',18)
    console.log(test11)
 })()

console.log('-------------end1--------------')

// 2.类式继承
var two = (function () { 
    var Sup = function () { 
        this.supName = 'supName' 
        this.supBook = ['a']
    }
    var Sub = function () { 
        this.subName = 'subName'
        this.subBook = ['b']
    }
    // ->
    Sub.prototype = new Sup() 
    
    var sub = new Sub()
    sub.subBook.push('bb')
    sub.supBook.push('aa')
    var sub2 = new Sub()
    console.log(sub)
    console.log(sub2)    
})()
console.log('-------------end2--------------')

// 3.构造函数继承
var three = (function () { 
    var Farther = function () { 
        this.farther = 'farther' 
        this.fbook = ['f']
    }
    // Farther.prototype.aaa = function () { }
    var Son = function () { 
        Farther.call(this)
        this.sbook = ['s']
        this.son = 'son'
    }
    // Son.prototype=Object
    var son = new Son()
    son.sbook.push('ss')
    son.fbook.push('ff')
    var son2 = new Son()
    son2.sbook.push('ss2')
    son2.fbook.push('ff2')    
    console.log('son',son)
    console.log('son2', son2)
    // console.log('son',son)
})()
console.log('-------------end3--------------')

// 4.组合继承
var four = (function () {
    var Farther = function () { 
        this.farther = 'farther' 
        this.fbook = ['f']
    }
    
    var Son = function () { 
        Farther.call(this)
        this.sbook = ['s']
        this.son = 'son'
    }   
    // Son.prototype = Object.create(Farther.prototype, {
    //     'c': {
    //         value: function () { }
    //     }
    // })
    
    var son = new Son()
    son.sbook.push('ss')
    son.fbook.push('ff')
    var son2 = new Son()
    son2.sbook.push('ss2')
    son2.fbook.push('ff2')
    console.log('son',son)
    console.log('son2',son2)    
 })()
console.log('-------------end4--------------')

// 5.原型继承
var five = (function () {
    var inheritObject = function (o) {
        var F = function () { }
        F.prototype = o
        return new F()
    }
    var arg = { book: [2], name: 'a' }
    var a = inheritObject(arg)    
    var b = inheritObject(arg) 
    a.book.push(4)
    a.name = 'aa'
    b.book.push(5)
    b.name = 'bb'
    console.log(a)
    console.log(b)
 })()
console.log('-------------end5--------------')

// 6.寄生式继承
var six = (function () {
    var inheritObject = function (o) {
        var F = function () { }
        F.prototype = o
        return new F()
    }
    var arg = { book: [2], name: 'a' }
    var createBook = function (o) { 
        var a = new inheritObject(o)
        a.getSomeThing = function () { 
            console.log(this.book)
        }
        return a
    }
    var c = createBook(arg)    
    var b = createBook(arg) 

    console.log(c)
    console.log(b)

    c.book.push(4)
    // c.book.push(44)
    // c.name = 'aa'
    // c.getSomeThing()

    b.book.push(5)
    // b.book.push(555)
    // b.name = 'bb'
    // b.getSomeThing()

    console.log(c)
    console.log(b)
 })()

console.log('-------------end6--------------')
// 7.寄生组合继承


console.log('-------------end7--------------')
// 8.多继承
var eight = (function () { 
    var arg = {
        ar: [1, 2, 3],
        name:'ken'
    }
    var f = function () { 
        var arg = arguments
        var o = {}
        for (i in arg) {
            o[i] = arg[i]
        }
        return o
    }
    console.log(f(arg))
    console.log(arg.ar.push(4))
})()

console.log('-------------end8--------------')
// 9.多态
var nine = (function () { 
    var basketball = function () { 
        return '篮球'
    }
    var football = function () { 
        return '足球'
    }    
    var f = function (type) {
        switch (type) { 
            case 'basketball':
                return basketball()
                break
            case 'football':
                return football()
                break
            default: return
            
        }
    }
    console.log(f('football'))
})()

console.log('-------------end9--------------')
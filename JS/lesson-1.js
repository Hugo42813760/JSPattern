// 1.如何实现方法的链式调用
const CallMehtods = function () { 
    this.num = 0;
    this.add = function () { 
        this.num++
        return this
    }
    this.plus = function () { 
        this.num--
        return this
    }
}
const test1 = new CallMehtods
test1.add().add().add().plus()
console.log(test1.num)
console.log('-------------end1--------------')
// 2.定义一个可以为函数添加多个方法的方法
Function.prototype.addMethods = function (name,fn) { 
    this[name] = fn
    return this
}
var add = new Function()

var test2 = add.addMethods('plus', function () { console.log('plusfn') }).addMethods('add', function () { console.log('addfn') })
console.log(test2.add(),test2.plus())
console.log('---------------end2------------')

//3.定义一个即可为函数原型添加方法又可为其自身添加方法的方法


console.log('---------------end3-----------')
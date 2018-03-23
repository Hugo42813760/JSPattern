// 工厂模式
var one = (function () {
    var factory = function () { 
        var arg = arguments
        var o = {}
        for (let i = 0; i < arg.length;i++) { 
            o[arg[i]] = arg[i]
        }
        return o
    }
    var name = 'k'
    var age = 10
    var o = factory(name, age)
    var o2 = factory(name,age)
    console.log(o)
    console.log(o2)
})()
 
console.log('-------------end1--------------')
 
 //工厂方法模式，安全模式类,安全的工厂方法
 //通过工厂模式为页面创建不同按钮
var two = (function () { 
    var Demo = function () { 
        if (this instanceof Demo) {
            this.getName()
        } else { 
            return new Demo()
        }
    }
    Demo.prototype = {
        getName: function () { 
            console.log(1111)
        }
    }
    var a = new Demo()
    var b = Demo()
    console.log(a.getName())
    console.log(b.getName())
})()

console.log('-------------end2--------------')

 //安全的工厂方法,抽象工厂模式
 //通过工厂模式为页面创建不同按钮
var three = (function () { 
    var CreateBtnFactory = function (type,fn) { 
        if (this instanceof CreateBtnFactory) {
            if (typeof this[type] == 'function') {
                this[type](type)
            } else { 
                // throw Error('没找到')
            }
            
        } else { 
            return new CreateBtnFactory(type,fn)
        }
    }
    CreateBtnFactory.prototype = {
        ele: document.getElementById('demo'),
        btn: function () { 
            return document.createElement('div')
        },
        create: function (type) { 
            var btn = this.btn()
            btn.innerHTML = type
            this.ele.appendChild(btn)
        },
        update: function (type) { 
            var btn2 = this.btn()
            btn2.innerHTML = type
            this.ele.appendChild(btn2)
        }
    }   
    a = new CreateBtnFactory('create')
    b = CreateBtnFactory('create')
    c = new CreateBtnFactory('update')
    d = CreateBtnFactory('update')
    e = new CreateBtnFactory('111')
    f = CreateBtnFactory('222')    
})()

console.log('-------------end3--------------')

var four = (function () { 
    // var that = this
    var m = {
        foo: 'bar',
        func: function () { 
            var self = this
            
            // console.log(this.foo)
            // console.log(self.foo)
                
            // var ac = (function () { 
            //     console.log(this.foo)
            //     console.log(self.foo) 
            // })()
            (function () { 
                console.log(this.foo)
                console.log(self.foo)
            })()            
        }
    }
    m.func()
})()
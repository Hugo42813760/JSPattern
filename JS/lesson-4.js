// 单例模式，一个只允许实例化一次的对象类
var one = (function () {
    var $ = (function () { 
        var a = null

        var Single = function () { 
            return {
                pub: function () {console.log('pub') },
                prop:'123'
            }
        }
        return function () { 
            if (!a) {
                console.log('创建')
                a = new Single()
            }
            console.log('没创建')
            return a
        }
    })()
    console.log($())
    console.log($())
})()
 
console.log('-------------end1--------------')

function cal () { 
    console.log('cal')
}

var fs = "eval('cal()')"

var s = document.createElement('script')
s.innerHTML = fs
console.log(s)

console.log('-------------end2--------------')
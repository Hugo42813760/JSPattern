var ob = (function () {
    // 防止消息队列暴露而被纂改故消息容器作为静态变量保存
    // 保存注册消息
    var _message = {}
    return {
        regist: function (type,fn) { 
            if (!_message[type]) {
                _message[type] = [fn]
            } else { 
                _message[type].push(fn)
            }
        },
        release: function (type,args) { 
            if (!_message[type]) { 
                return
            }
            // 定义消息信息
            var events = {
                type: type,
                args: args || {}
            },
            i = 0,
            len = _message[type].length
            for (; i < len; i++) {
                _message[type][i].call(this,events)
            }
        },
        remove: function (type,fn) { 
            if (!Array.isArray(_message[type])) { 
                return
            }
            var i = _message[type].length-1;
            for (; i >= 0; i--) {
                _message[type].splice(i,1)
            }
        }
    }
})()
ob.regist('english', function (e) { console.log(e.type,e.msg)})
ob.regist('english', function (e) { console.log(e.type,e.msg)})
ob.regist('english', function (e) { console.log(e.type,e.msg)})
ob.release('english', {msg:'english1'})
ob.remove('english')
ob.release('english',{msg:'english2'})

console.log('-------------end1--------------')

var Teacher = function () {
}
Teacher.prototype.say = function () { 

}
var Student = function (result) {
    var result = result
    this.say = function () { 
        console.log(this.result)
    }
}
Student.prototype.answer = function (question) { 
    console.log(this.result)
}

// window.onload = function () { 
(function () {
    
 }())
 var BaseLocalStorge = function (preId,timeSign) { 
    this.preId = preId
    this.timeSign = timeSign || '|-|'
}
BaseLocalStorge.prototype = {
    status: {
        SUCESS: 0,
        FAILURE: 1,
        OVERFLOW: 2,
        TIMEOUT:3
    },
    storge: localStorage || window.localStorage,
    getKey: function (key) { 
        return this.preId + '_' + key
    },
    get: function () { 
        
    },
    set: function (key, value, callabck, time) { 
        var status = this.status.SUCESS,
        key = this.getKey(key)
        try {
            time = new Date().getTime() || time.getTime()
        } catch (e) { 
            time = new Date().getTime() + 31*24*60*60*1000
        }
        try {
            this.storge.setItem(key,time+this.timeSign+value)
        } catch (e) {
            status = this.status.OVERFLOW
        } 
        callabck && callabck.call(this,key,value,status)
    },
    remove: function (key,callabck) { 

    }
}
var test1 = new BaseLocalStorge('msg', new Date().getTime())
// test1.set('name', 'lihq')

var test2 = new BaseLocalStorge('msg2', new Date().getTime())
// test2.set('age', 18)

console.log(test1, test2)
console.log(test1.getKey('name'),test2.getKey('age'))
// }
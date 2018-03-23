function Mypromise (fn) {
    console.log(0)
    var callbacks = []
    this.then = function (f) { 
        console.log(5)
        callbacks.push(f);
        // console.log('callbacks',callbacks)
        return this
    }
    function resolve (value) {
        console.log(4)
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }
    
    fn(resolve);
    console.log(3)
}
var a = function () {
    return new Mypromise(function (resolve) { 
        console.log(1)
        setTimeout(function () {
            console.log('test1')
        }, 1000)
        setTimeout(function () {
            console.log('test2')
            resolve(6)
        }, 2000)  
        console.log(2)
    })
}
// var b = a()
a().then(function (value) { 
    console.log(value)
})


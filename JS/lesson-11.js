var Waiter = function () { 
    var dfd = [],
        doneArr = [],
        failArr = [],
        slice = Array.prototype.slice,
        that = this;
    var MyPromise = function () {
        this.resolved = false
        this.rejected = false
    }
    MyPromise.prototype = {
        resolve: function () { 
            var i = dfd.length

            for (;i > 0;i--) { 
                console.log(dfd[i])
            }
            this.resolved = true
        },
        reject: function () { 

        }
    }
    that.Deferred = function (fn) { 
        name = new MyPromise()
        dfd.push(name)
        return dfd
        dfd.push(fn)
    }
    function _exex (arr) { }

    that.when = function () { }

    that.done = function () { }

    that.fail = function () { }


}

w = new Waiter
w.Deferred(function () { console.log(1)})
w.Deferred(function () { console.log(2)})

// console.log(w)



window.onload = function () { 
    const btn = document.querySelector('#test')
    // btn.addEventListener('')
    btn.onclick = function (e) { 
        console.log(0)
        console.log(e)
        e.cancelBubble = true
        // e.stopPropagation()
    }

    const btn2 = document.querySelector('#test2')
    btn2.addEventListener('click', function () { 
        console.log(1)
    })
 
    const body = document.querySelector('#demo')
    body.addEventListener('click', () => { 
        console.log(2)
    })    

    var a = function (selector) { 
        return  new a.fn.init(selector)
    }
    a.fn = a.prototype = {
        constructor:a,
        init: function (selector) { 
            this[0] = document.getElementById(selector)
            this.length = 1

            return this
        },
        size: 123,
        fn: function () { 
            return this.size
        }
    }
    a.fn.init.prototype = a.fn
    var c = a('test')
    var d = a('test2')
    console.log(c,c.size)
    console.log(d)
    // console.log(c)
    // console.log(new a().fn())

}
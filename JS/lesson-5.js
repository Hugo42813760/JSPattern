var one = (function () {
    // var sc = document.createElement('script')
    
})()
var Tip = function (type) { 
    var t = document.createElement('div')
    t.innerHTML = type
    return t
}

var inputs = document.querySelectorAll('input')
var spans = document.querySelectorAll('span')
inputs.forEach((item,idx) => { 
    item.onclick = function () { 
        console.log(idx)
        spans.forEach((item,index) => { 
            item.style.display = 'none'
        })
        spans[idx].style.display = 'block'
    }
})



console.log('-------------end1--------------')
// sum(2,3)->5
// sum(2)(3)
function sum (a) {
    return function (b) { 
        return a + b
    }
}
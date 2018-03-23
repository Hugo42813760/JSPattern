var testP = function () { 
    return new Promise(function (resolve, rej) { 
        console.log(1)
        setTimeout(function () { 
            console.log(5)
        }, 1000)
        setTimeout(function () { 
            resolve(4)
            console.log(6)
        }, 2000)    
        
        console.log(2)
    })
}

a = testP().then(function (b) { 
    console.log(b)
})
console.log(3)
console.log(a)
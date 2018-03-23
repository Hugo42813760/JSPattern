function a () { 
    if (!XMLHttpRequest) {
        a = () => {
            return console.log(1)
        }
    } else { 
        a = () => {
            return console.log(2)
        }        
    }
    return a ()
}

a()
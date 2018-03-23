// data：请求数据；type：响应数据处理对象；dom：事件源

var sendData = function (data, type, dom) { 
    var xhr = new XMLHttpRequest()
    xhr.onload = function (e) { 
        if (xhr.status >= 200 || xhr.status < 300 || xhr.status == 304) {
            console.log('请求成功',xhr.responseText)
            console.log(xhr,e)
        } else { 
            console.log(xhr,e)
        }
    }
    xhr.open('get', 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E5%93%88%E5%93%88&rsv_pq=d7546e9900053edb&rsv_t=a9b4d3pMdcL7QK2vXRgGOtjLEnu6LDOtyQBwgcKERhyyHOmNOBWM6R0NH10&rqlang=cn&rsv_enter=1&rsv_sug3=6&rsv_sug1=4&rsv_sug7=100&rsv_sug2=0&inputT=1547&rsv_sug4=3648',true)
    xhr.send()
}
sendData()
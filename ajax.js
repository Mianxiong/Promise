ajax = (method,url,options) => {
    const {success,fail} = options //析构赋值
    const request = new XMLHttpRequest()
    request.open(method,url)
    request.onreadystatechange =()=>{
        if(request.readyState === 4) {
            //成功旧调用success，失败就调用fail
            if(request.status < 400) {
                success.call(null,request.response)
            } else if(request.status >= 400) {
                fail.call(null,request,request.status)
            }
        }
    }
    request.send()
}

ajax('get','/xxx',{
    success(response){},fail: (request,status)=>{}
}) //左边是 function 缩写，右边是箭头函数
//success:function(response)

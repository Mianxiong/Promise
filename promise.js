ajax = (method, url, options) => {
    return new Promise((resolve, reject) => {
        const {
            success,
            fail
        } = options //析构赋值
        const request = new XMLHttpRequest()
        request.open(method, url)
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                //成功就调用resolve，失败就调用reject
                if (request.status < 400) {
                    resolve.call(null, request.response)
                } else if (request.status >= 400) {
                    reject.call(null, request, request.status)
                }
            }
        }
        request.send()
    })
}

ajax('get', '/xxx').then((response) => {}, (request) => {})
import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
    // 变量
    let promise;

    // 返回一个promise对象
    return new Promise((resolve, reject) => {
        //  判断请求的类型
        if (type.toUpperCase() === 'GET') { // get请求
            // 拼接字符串
            let paramsStr = '';
            // 遍历
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&';
            });
            // 过滤最后的&
            if (paramsStr) {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            // 拼接完整路径
            url += '?' + paramsStr;
            // 2.6 发起get请求
            promise = axios.get(url);
        } else if (type.toUpperCase() === 'POST') { // post请求
            // 发起post请求
            promise = axios.post(url, params);
        }
        //  处理结果并返回
        promise.then((response) => {
             resolve(response.data);
        }).catch(error => {
             reject(error);
        })
    });

}
/**
 * readystate:0：UNSENT 未发送,代理被创建，但未调用open()方法  0
 *            1：OPENED  已打开,open方法已经被调用  0
 *            2：HEADERS_RECEIVED: send()方法被调用，并且头部和状态已经可获得  0
 *            3：LOADING 下载中，responseText 属性已经包含部分数据  200
 *            4：DONE 下载操作已完成，服务器响应完成    200
 * status:200 返回resolve状态
 *       :404 返回reject状态
 * @param {*} url 
 * @param {*} method 
 */
var xhr = new XMLHttpRequest();
const url = 'http://www.baidu.com';
xhr.open('GET', url, true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.log(xhr.statusText);
        }
    }
}
xhr.send(null)
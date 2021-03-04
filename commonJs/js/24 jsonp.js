/**
 * @desc JSONP跨域请求
 *        原理：标签的 src 和 link 链接的静态资源，本质上是get请求，没有受到同源策略的限制
 */
let script = document.createElement('script')
script.src = 'http://www.baidu.cn/login?username=JasonShu&callback=func';
document.body.appendChild(script);
function func(res) {
    console.log(res);
}
//整个包的入口
//定义Install方法,接收Vue作为参数。如果使用use注册插件，则所有的组件都将被注册
import Button from './button'
import Dialog from './dialog'
const components = [
    Button,
    Dialog
]
const install = function (Vue) {
    //遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
    // console.log(123)
}
//判断是否直接引入文件，如果是，就不用调用Vue.use()
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default install

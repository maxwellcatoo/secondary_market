import Toast from "./Toast";
const obj = {}
obj.install = function (Vue) {
    //1创建组建构造器
    const toastContrustor = Vue.extend(Toast)

    //2使用new的方式，根据组件构造器，可以创建出一个组件对象
    const toast = new toastContrustor()

    //3将组件对象手动挂载到某一元素上
    toast.$mount(document.createElement('div'))

    //4  toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast =  toast
}


export default obj
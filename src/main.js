import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routeConfig from './router-config'

//加载路由中间件
Vue.use(VueRouter)
//定义路由
const router = new VueRouter({
    routes: routeConfig
})
Vue.config.productionTip = false
import axios from 'axios'
// 将axios挂载到vue中，这里起名(随意)为request，在组件中就可以使用this.request来使用axios了
Vue.prototype.request = axios;

// antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

// 1.1 导入第三包
import Vue from 'vue';
import VueRouter from 'vue-router';
// 1.2 启动Vue插件
Vue.use(VueRouter);

// 2.1 导入根组件
import AppComponent from './component/App.vue';

// 2.2 导入路由配置
import routerConfig from './router';
import apiConfig from './api_config.js'

// 2.2 扩展实例成员
Vue.prototype.axios = axios; // 把axios库放置到原型, 组件实例即可直接调用axios对象
Vue.prototype.api = apiConfig; // 把api配置放置到原型, 组件实例即可直接调用api对象


// 渲染根组件, 启动应用程序
new Vue({
    el: '#app',
    render(createNode) {
        return createNode(AppComponent);
    },
    router: new VueRouter(routerConfig)
});
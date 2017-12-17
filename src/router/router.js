// 导入受路由控制的组件
import HomeComponent from '../component/home/home.vue';
import LoginComponent from '../component/login/login.vue';
import RegisterComponent from '../component/register/register.vue';

// 导出路由配置
export default {
    routes: [
        // 首页路由配置
        { path: "/", redirect: "/home" },
        { name: "h", path: "/home", component: HomeComponent },

        // 新闻路由配置
        { name: "l", path: "/login", component: LoginComponent },
        { name: "r", path: "/register", component: RegisterComponent }
    ]
};
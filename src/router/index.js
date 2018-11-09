import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login/login.vue';
import Home from '@/views/home.vue';
import User from '@/views/users/user.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // 登录
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    // 首页显示的路由
    {
      name: 'home',
      path: '/',
      component: Home,
      children: [
        // 创建一个用户路由
        {
          name: 'users',
          path: 'users',
          component: User
        }
      ]
    }

  ]
});

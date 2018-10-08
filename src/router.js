import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 路由级别的代码分离,被访问的路由通过懒加载(生成一个独立的模块)的形式展现。
      component: () =>
        import('./views/Manage.vue'),
    },
  ],
});

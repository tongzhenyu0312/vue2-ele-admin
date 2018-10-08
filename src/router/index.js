import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 路由层面的代码分离
      // 这种写法会为当前路由生成一个独立的模块(Home.[hash].js),当路由被访问时,开启懒加载模式
      component: () => import('../views/Home'),
    },
  ],
})

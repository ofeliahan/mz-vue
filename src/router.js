// 这个是vue-router 的配置文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinemas from './views/Cinema.vue';
import Center from './views/center.vue';
import City from './views/City.vue';
import home from './views/home.vue';
import Detail from './views/Detail.vue';

Vue.use(VueRouter);

// 路由配置
let router = new VueRouter({
  // routes  配置路由对照表
  // localhost:8080/#/films  -> Film.vue
  routes: [
    {
      path: '/',
      component: home,
      // 不是一级路由,路径前面不需要加斜杠
      children: [
        {
          path: 'films',
          component: Film
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: 'films'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/detail/:id',
      component: Detail,
      props: true

    },
    {
      path: '*',
      redirect: '/films'
    }
  ]
})

// 暴露出口
export default router;

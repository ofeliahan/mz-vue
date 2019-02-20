// 这个是vue-router 的配置文件
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinemas from './views/Cinema.vue';
import Center from './views/center.vue';
/* import City from './views/City.vue';
import home from './views/home.vue'; */
import Detail from './views/Detail.vue';
import Card from './views/Card.vue';
import Money from './views/Money.vue';
import System from './views/System.vue';
import Login from './views/Login.vue';

nprogress.configure({ showSpinner: false });

Vue.use(VueRouter);

// 路由配置
let router = new VueRouter({
  // routes  配置路由对照表
  // localhost:8080/#/films  -> Film.vue
  scrollBehavior (to, from, savePosition){
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('./views/home.vue'),
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
      component: () => import('./views/City.vue')
    },
    {
      path: '/detail/:id',
      component: Detail,
      props: true

    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/system',
      component: System
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: '/films'
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start();
  var pathArray = ['/card', '/money', '/system'];
  if (pathArray.indexOf(to.path) > -1 && !sessionStorage.getItem('nickname')) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
})

// 全局后置守卫
router.afterEach((to, from) => {
  nprogress.done();
})

// 暴露出口
export default router;

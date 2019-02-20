import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import './assets/style/reset.less';

Vue.config.productionTip = false;

new Vue({
  // 引入配置文件
  router: router,
  render: h => h(App)
}).$mount('#app')

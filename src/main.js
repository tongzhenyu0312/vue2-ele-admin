import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 默认样式重置
import 'normalize.css';

// 使用element-ui
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element);

import './style/common.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import './routerBeforeEach'
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
Vue.prototype.$bus = new Vue

Vue.use(VueLazyLoad, {
  preLoad: 2,
  loading: require('assets/img/common/placeholder.jpg')
})
Vue.config.productionTip = false
import { Toast } from 'vant';

Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

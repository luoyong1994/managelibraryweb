// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/routerGuard';
import vuex from './store/index'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import request from './api/api';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$request = request;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  components: { App },
  template: '<App/>'
})

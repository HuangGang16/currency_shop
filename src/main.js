import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 引入fastClick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

// 引入全局的样式
import '@/style/common.less'

// 引入全局UI组件库-vant
import '@/plugins/vant'

// 引入rem
import '@/config/rem.js'

// 引入全局过滤器
import '@/config/filters'

// 配置二维码插件
import VueQriously from 'vue-qriously'
Vue.use(VueQriously);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

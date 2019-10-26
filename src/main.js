import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myCharts from './assets/script/myCharts'
import echarts from 'echarts'
import 'echarts-gl'
import 'amfe-flexible/index.js'
import 'normalize.css'

Vue.use(myCharts);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

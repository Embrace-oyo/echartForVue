import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible/index.js'
import 'normalize.css'

import echarts from 'echarts'
import 'echarts-gl'
import myCharts from '@/assets/script/myCharts'

Vue.use(myCharts);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1icmFjZSIsImEiOiJjazI5ODVhazIzZTN2M2htdnp4djUxbjN5In0.8fTeijCVdOx6tmDdDimkDg';
mapboxgl.setRTLTextPlugin('@/assets/script/mapbox-gl-rtl-text.js');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

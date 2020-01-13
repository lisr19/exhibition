// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VCharts from 'v-charts'
import ECharts from 'echarts'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import './libs/flexible'

Vue.use(VCharts)
Vue.use(ECharts)
Vue.use(iView)
// Vue.use(Three)
Vue.prototype.$echarts = ECharts
Vue.config.productionTip = false
// Vue.prototype.$Cesium = Cesium

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // mounted () {
  //   // var viewer = new Cesium.CesiumWidget('cesiumContainer')
  //   var viewer = new Cesium.Viewer('cesiumContainer')
  // }
})

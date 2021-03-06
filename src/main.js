import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible'

Vue.config.productionTip = false

// 导入组件库
import lbr from '@/packages/index'
// 注册组件库
Vue.use(lbr)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
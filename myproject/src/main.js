import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/css/style.css"
import "@/assets/css/appstyle.css"

// vue-video-player
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

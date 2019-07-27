//main.js引入其他库，并配置库
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方组件库在下面引入

Vue.config.productionTip = false

//引入vuex
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{//记录屏幕的宽度
    width_s:document.documentElement.clientWidth
  }
})
// router.beforeEach((to,from,next)=>{
//   console.log(store.state.width_s)
//   next();
//   })
  
  //引入vue-touch
import vueTouch from "vue-touch"
Vue.use(vueTouch)
vueTouch.config.swipe={
  threshold:store.state.width_s/2
  //设置滑动距离为屏幕宽度一半
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import enheng from './components/HelloWorld.vue'
import store from './store'




const app = createApp(App)
//定义一个全局的组件
app.component('enheng', enheng)
app.use(router)
app.use(store)

// 所有的导航都是异步的，为确保路由加载正确，可使用isReady函数
// router.isReady().then(() => {
//   app.directive('hightline', {
//     beforeMount(el, bind, vnode) {
//       el.style.background = bind.value
//     }
//   })
//   app.mount('#app')
// })
app.directive('hightline', {
  beforeMount(el, bind, vnode) {
    el.style.background = bind.value
  }
})
app.mount('#app')



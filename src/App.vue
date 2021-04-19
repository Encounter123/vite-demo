<template>
  <div>

  <p @click="$store.commit('add')">{{$store.state.count}}</p>
  <p @click="add">{{count}}</p>
  
  <!-- <HelloWorld msg="Hello 3.0 + Vite" /> -->
  <!-- <ModelButton></ModelButton> -->
  <!-- <emit @returnParent="returnParent"></emit> 
  <enheng></enheng> -->

  <!-- 异步组件 -->
  <!-- <AsyncComponent></AsyncComponent> -->

  <!-- <todos></todos> -->

  <router-view></router-view>
  <!-- <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view> -->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModelButton from './components/ModelButton.vue'
import Emit from './components/emit.vue'
import { defineAsyncComponent, reactive, toRefs } from 'vue'
import Todos from './components/Todos.vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModelButton,
    Emit,
    Todos,
    AsyncComponent: defineAsyncComponent(() => import('./components/asyncComponent.vue'))
  },
  setup(){
    const store = useStore()
    const state = reactive({
      returnParent: (e)=>{
        alert(e);
      },
      add(){
        store.commit('add')
      },
      count: toRefs(store.state).count,       //toRefs必须加，不然store就会失去响应式
    })

    
    console.log(store);

    fetch('/api/users').then(res=>res.json()).then(res=>{
      console.log(res);
    })

    fetch('/api/user').then(res=>res.json()).then(res=>{
      console.log(res);
    })

    console.log(import.meta.env.VITE_BASEURL);

    return {
      ...toRefs(state)
    }
  }

}
</script>

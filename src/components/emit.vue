<template>
  <button @click="enheng">点我</button>   
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  emits: ['returnParent'],
  setup(props, ctx) {
    const state = reactive({
      enheng: ()=>{
        ctx.emit('returnParent', 'wo si zi')
      }
    })

    

    return {
      ...toRefs(state)
    }
  },
  

}
</script>
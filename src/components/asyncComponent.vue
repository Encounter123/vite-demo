<template>
  <div v-hightline="'red'">这是异步组件</div>
</template>
<script>
import { onMounted, reactive, toRefs, watch } from 'vue'
export default {
  setup(props, ctx) {
    const state = reactive({
      msg: ''
    })

    onMounted(()=>{
      setTimeout(()=>{
        state.msg = '112'
      },2000)
    })


    console.log(ctx);
    
    watch(()=>state.msg,(val, oldval)=>{
      console.log('我监听到了，他变成了'+val)
    })


    return {
      ...toRefs(state),
      onMounted,
      watch
    }

  },
}
</script>
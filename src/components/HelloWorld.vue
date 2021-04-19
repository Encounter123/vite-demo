<template>
  <h1>{{ name }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ number }}</h1>
  <h1>{{ msggg }}</h1>
  <p ref="desc"></p>


</template>

<script>
import { reactive, onMounted, onUnmounted, toRefs, computed, ref, watch } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const state = reactive({
      name: 'asdas',
      number: 1,
      // double: computed(()=>{
      //   state.number ++
      // })
    })

    let timer;

    onMounted(()=>{
      timer = setTimeout(()=>{
        state.number++
      },3000)
    })

    onUnmounted(()=>{
      // clearTimeout(timer)
    })


    // other  单值的响应式
    const msggg = ref('some message')

    //组件获取
    //文本中定义的desc，会自动匹配到这个ref所对应的值
    const desc = ref(null)
    //desc 就是dom元素
    console.log(desc)
    watch(()=>state.number, (val, oldval)=>{
      const p = desc.value
      p.textContent = 'aaaaa'+val+'sadasdadassd'+oldval
    })


    return {
      desc,
      msggg,
      ...toRefs(state),
      onMounted
    }
  }
}
</script>

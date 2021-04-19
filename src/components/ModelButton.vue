<template>
  <div>
    <button @click="modelOpen=true">弹窗一个框</button>

    <!-- teleport 元素可以挂在和div id='app' 同级的div， 一般用着模态框 -->
    <teleport to='body'>
      <div v-if="modelOpen">
        <button>关闭</button>
      </div>
    </teleport>

  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      modelOpen: true
    })

    return {
      ...toRefs(state)
    }
  },
}
</script>
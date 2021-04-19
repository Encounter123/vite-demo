<template>
  <div>aboutView动态路由</div>
  <button @click="back">点我返回</button>
</template>
<script>
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute(); //获取参数

    function back() {
      console.log(router);
      console.log(route);
      console.log(route.query);
      console.log(route.path);
      router.push("/");
    }

    //路由守卫
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm("你确认要离开");
      if (!answer) {
        return false;
      }
    });

    return {
      back,
    };
  },
};
</script>

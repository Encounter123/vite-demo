<template>
  <div :class="{ active: isActive }" @click="navigate">
    {{ route.name }}
  </div>
</template>

<script>
import { RouterLink, userLink } from "vue-router";
export default {
  props: {
    ...RouterLink.props,
    inactiveClass: String,
  },
  setup() {
    //获取routerLink内部的
    const { route, href, isActive, isExactActive, navigate } = userLink(props);
    console.log(route, href, isActive, isExactActive, navigate);

    return { route, isActive, navigate };
  },
};
</script>

<style scoped>
.active {
  background-color: rgb(158, 50, 50);
}
</style>

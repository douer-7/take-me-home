<template>
  <tab-bar
    class="main-tab-bar"
    activeColor="#f7c5a8"
    :items="items"
  ></tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabBar/TabBar";
export default {
  data() {
    return {
      items: [
        {
          key: 0,
          text: "首页",
          path: "/home",
          iconfont: 'icon-home',
        },
        {
          key: 1,
          text: "待领养",
          path: "/cats",
          iconfont: 'icon-paw',
        },
      ]
    };
  },

  components: { TabBar },

  methods: {}
};
</script>

<style scoped>

</style>
<template>
  <div id="app">
    <router-view class="view"></router-view>
    <main-tab-bar v-if="$route.meta.keepAlive"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import url("assets/css/base.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <div
    class="tab-bar"
    :style="{height:height}"
  >
    <TabBarItem
      v-for="item in items"
      :key="item.key"
      :text="item.text"
      :path="item.path"
      :iconfont="item.iconfont"
      :activeColor="activeColor"
    ></TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  props: {
    activeColor: String,
    items: Array,
    height: String
  },
  data() {
    return {};
  },

  components: {
    TabBarItem
  },

  methods: {}
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 59px;
  text-align: center;
}
</style>
<template>
  <div
    @click="itemClick()"
    class="tab-bar-item"
    :style="activeStyle"
  >
    <i
      v-if="iconfont"
      :class="'iconfont '+iconfont"
    ></i>
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    iconfont: String,
    path: String,
    activeColor: String,
  },
  data() {
    return {
    };
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  font-size: 14px;
  line-height: 1.4;
}

.tab-bar-icon {
  width: 28px;
  height: 28px;
}

.iconfont {
  font-size: 20px;
}
</style>
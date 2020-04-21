<template>
  <div
    class="nav-bar"
    :style="{height:height}"
  >
    <div
      v-if="back"
      class="nav-back"
      @click="historyBack()"
    >
      <i class="iconfont icon-Back"></i>
    </div>
    <p
      class="nav-title"
      :style="{color:color}"
    >{{title}}</p>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    back: Boolean,
    height: String,
    color: String,
    catInfo: Object
  },
  data() {
    return {};
  },

  components: {},

  methods: {
    historyBack() {
      this.$router.back(-1)
    }
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.nav-title {
  margin: 0 auto;
  font-size: 18px;
}
.nav-back {
  position: absolute;
  left: 15px;
}
.nav-right {
  position: absolute;
  right: 15px;
}
.iconfont {
  font-size: 26px;
}
</style>
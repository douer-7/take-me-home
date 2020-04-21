<template>
  <Button class="nav-block-but" block>
    <slot>
      <img :src="navIconSrc" class="nav-icon" />
      <p class="nav-name">{{navName}}</p>
    </slot>
    <span class="icon icon-go">＞</span>
  </Button>
</template>

<script>
import Button from "@/components/common/button/Button";

export default {
  props: {
    navIconSrc: String,
    navName: String
  },
  data() {
    return {};
  },

  components: {
    Button
  },

  methods: {}
};
</script>

<style scoped>
.nav-block-but {
  background-color: #fff;
  height: 50px;
  display: flex;
}
.nav-block-but::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.nav-icon {
  height: 100%;
  margin-right: 10px;
  border-radius: 2px;
}
.icon-go {
  position: absolute;
  right: 24px;
}
</style>
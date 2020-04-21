<template>
  <div class="button" :style="butStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    background: String,
    block: Boolean,
    mini: Boolean
  },
  data() {
    return {};
  },
  computed: {
    butStyle() {
      return {
        background: this.background,
        width: this.block ? "100%" : ""
      };
    }
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
.button {
  position: relative;
  display: flex;
  align-items: center;
  width: 184px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 24px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  color: #555;
  line-height: 1.41176471;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
.button :hover {
  background-color: #ddd;
}
</style>
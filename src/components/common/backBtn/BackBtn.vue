<template>
  <div
    class="backBtn"
    @click="historyBack()"
  >
    <i class="iconfont icon-Back"></i>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data() {
    return {

    };
  },

  methods: {
    historyBack() {
      this.$router.back(-1)
    }
  }
}

</script>

<style scoped>
.iconfont {
  font-size: 40px;
  color: #f7f7f7;
}
</style>
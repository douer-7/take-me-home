<template>
  <div class="card">
    <div class="imgBox">
      <img
        :src="avator"
        class="card-img"
      >
    </div>
    <div class="catInfo">
      <p class="age">{{age}}</p>
      <p class="sex">{{sex}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    name: String,
    avator: String,
    width: String,
    sex: String,
    age: String,
  },
  data() {
    return {

    };
  },

  components: {},

  computed: {

  },

  beforeMount() { },

  mounted() { },

  methods: {},

  watch: {}

}

</script>

<style scoped>
.card {
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.imgBox {
  width: 100%;
  padding-bottom: 100%;
  background-color: #ddd;
}
.card-img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  z-index: 1;
}
.catInfo {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #f7c5a8;
}
.age {
  color: #fa744f;
}
.sex {
  color: #16817a;
}
</style>
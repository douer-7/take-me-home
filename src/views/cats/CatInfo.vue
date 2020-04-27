<template>
  <div>
    <BackBtn class="backBtn"></BackBtn>
    <p
      class="errorTips"
      v-show="catsInfo.id === undefined"
    >
      抱歉，未找到猫咪信息，请联系管理员。
    </p>
    <div v-show="catsInfo.id !== undefined">
      <img :src="catsInfo.avator">
      <p v-if="catsInfo.sex"><span class="lable">性别:</span>{{catsInfo.sex}}</p>
      <p v-if="catsInfo.age"><span class="lable">年龄:</span>{{catsInfo.age}}</p>
      <p v-if="catsInfo.isCastration"><span class="lable">绝育:</span>{{catsInfo.isCastration}}</p>
      <p v-if="catsInfo.appearance"><span class="lable">外貌:</span>{{catsInfo.appearance}}</p>
      <p v-if="catsInfo.description"><span class="lable">描述:</span>{{catsInfo.description}}</p>
      <img
        :key="imgsrc"
        v-for="imgsrc in catsInfo.imgs"
        :src="imgsrc"
      >
    </div>
  </div>
</template>

<script>
import { request } from "@/network/request";
import BackBtn from "@/components/common/backBtn/BackBtn";


export default {
  name: '',
  props: {

  },
  data() {
    return {
      catsInfo: {}
    };
  },

  components: {
    BackBtn
  },

  computed: {},

  methods: {
    getCatInfo() {
      // 请求数据
      request({
        url: "/cat?id=" + this.$route.params.id
      }).then(res => {
        console.log(res.data.data);
        this.catsInfo = res.data.data;
      });
    },
  },

  created() {
    this.getCatInfo();
  }


}

</script>

<style scoped>
img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.errorTips {
  color: rgb(14, 105, 98);
  text-align: center;
  animation: show 2s;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
p {
  color: #333;
}
.lable {
  font-weight: bold;
  margin-right: 10px;
}

.backBtn {
  border-radius: 30%;
  padding: 3px 5px;
  position: absolute;
  bottom: 5px;
  left: 16px;
  background-color: #679b9b;
  box-shadow: 0px 0px 16px #263b28;
}
</style>
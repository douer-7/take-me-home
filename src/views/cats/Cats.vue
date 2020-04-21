<template>
  <div class="view-B">
    <div class="catList">
      <CatPreview
        v-for="item in cats"
        :key="item.id"
        :name="item.name"
        :avator="item.avator"
        :sex="item.sex"
        :age="item.age"
        :catInfo="item"
        class="cat-card"
        @click.native="toCatInfo(item.id)"
      ></CatPreview>
    </div>
  </div>
</template>

<script>
import CatPreview from "@/components/content/CatPreview.vue";
import { request } from "@/network/request";

export default {

  data() {
    return {
      cats: []
    };
  },
  computed: {
  },
  components: {
    CatPreview
  },
  methods: {
    getCatList() {
      request({
        url: "/catList.json"
      }).then(res => {
        console.log(res);
        this.cats = res.data.data;
      });
    },
    toCatInfo(id) {
      this.$router.push('/catInfo/' + id);
    }
  },
  created() {
    this.getCatList();
  }
};
</script>

<style scoped>
.catList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cat-card {
  width: 45vw;
}
</style>
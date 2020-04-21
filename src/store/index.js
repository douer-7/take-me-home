import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

//创建对象

const store = new Vuex.Store({
  state: {
    organizationInfo: {
      name: '昵称',
    },
    cats: [
      // {
      //   name: '',
      //   age: '',
      //   sex: '',
      //   furColor: '',
      //   furLength: '',
      //   isSterilization: '',
      //   imgs: []
      // },
      {
        name: '哈哈',
        age: '5月',
        sex: '公',
        furColor: '橘白',
        furLength: '中长',
        isSterilization: 1,
        imgs: [
          'http://q89i86o3a.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200404200700.jpg',
          'http://q89i86o3a.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202004042007001.jpg',
          'http://q89i86o3a.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202004042007002.jpg'
        ]
      },
    ]
  },
})


export default store
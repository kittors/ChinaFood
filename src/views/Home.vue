<template>
  <div>
    <my-header />
    <van-tabs v-model="active" v-if="data" @click="onClick">
      <van-tab
        :title="item.category_name"
        v-for="(item, index) in data"
        :key="index"
      >
        <van-grid :column-num="2" :gutter="5">
          <van-grid-item v-for="(item, index) in categorySearch" :key="index">
            <!-- <van-image :src="require('/public/food/6.jpg')" /> -->
            <!-- <van-image :src="require(`${item.dishes_pic}`)" /> -->
            <van-image :src="require('/public/food/' + `${item.dishes_pic}`)" />
            <span>{{ item.dishes_name }}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader.vue"
export default {
  components: { MyHeader },
  data() {
    return {
      active: 0,
      data: "",
      categorySearch: "",
    }
  },
  methods: {
    ReqFoodCategory() {
      this.axios.get("/foodCategory").then((res) => {
        // console.log(res)
        // console.log(res.data.result)
        this.data = res.data.result
      })
    },
    // 查询对应title下的菜品
    onClick(name, title) {
      console.log(name, title)
      let url = `categorySearch?category_name=${title}`
      this.axios.get(url).then((res) => {
        console.log(res)
        // console.log(res.data.result)
        this.categorySearch = res.data.result
      })
    },
  },
  mounted() {
    this.ReqFoodCategory()
    this.onClick()
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 45.5vw;
  height: 33vh;
  background-color: antiquewhite;
  display: inline-block;
  margin: 3vh 0 0 3vw;
  img {
    width: 100%;
  }
}
</style>

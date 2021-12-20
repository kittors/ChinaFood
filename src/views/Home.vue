<template>
  <div>
    <my-header />
    <van-tabs v-model="activeName" v-if="data" @click="onClick">
      <van-tab
        :title="item.category_name"
        :name="item.category_name"
        v-for="(item, index) in data"
        :key="index"
      >
        <van-grid :column-num="2" :gutter="5">
          <van-grid-item
            v-for="(item, index) in categorySearch"
            :key="index"
            :to="{ path: '/detailpage', query: { item } }"
          >
            <van-image :src="item.dishes_pic" />
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
      activeName: "",
      data: "",
      categorySearch: "",
    }
  },
  methods: {
    // 跳转详情界面
    MoveTo() {
      console.log(this)
      this.$router.push("/detailpage")
    },
    ReqFoodCategory() {
      this.axios.get("/foodCategory").then((res) => {
        this.data = res.data.result
        console.log(this.data)
      })
    },
    // 查询对应title下的菜品
    onClick(name, title) {
      // console.log(name, title)
      // this.active_name = title
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
  },
  // 首页首次加载随机显示数据表
  created() {
    let url = `categorySearch?category_name=`
    this.axios.get(url).then((res) => {
      console.log(res)
      this.categorySearch = res.data.result
    })
  },
}
</script>

<style lang="scss" scoped></style>

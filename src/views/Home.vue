<template>
  <div>
    <my-header />
    <van-tabs v-model="active" v-if="data">
      <van-tab :title="item" v-for="(item, index) in data" :key="index">
        <van-grid :column-num="2">
          <van-grid-item
            v-for="value in 20"
            :key="value"
            icon="photo-o"
            :text="item"
          />
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
      data: [
        "推荐",
        "川菜",
        "鲁菜",
        "徽菜",
        "粤菜",
        "浙江菜",
        "江苏菜",
        "早餐",
        "晚餐",
        "午餐",
        "糕点",
      ],
    }
  },
  methods: {
    ReqFoodCategory() {
      this.axios.get("/foodCategory").then((res) => {
        console.log(res)
      })
    },
  },
  mounted() {
    this.ReqFoodCategory()
  },
}
</script>

<style lang="scss" scoped></style>

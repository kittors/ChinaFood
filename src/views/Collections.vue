<template>
  <div>
    <van-divider
      :style="{ color: 'red', borderColor: 'red', padding: '0 16px' }"
    >
      我的收藏
    </van-divider>
    <van-grid :column-num="2" :gutter="5">
      <van-grid-item
        v-for="(item, index) in data"
        :key="index"
        :to="{ path: '/detailpage', query: { item, data } }"
      >
        <van-image :src="item.dishes_pic" />
        <span>{{ item.dishes_name }}</span>
      </van-grid-item>
    </van-grid>
    <!-- <button @click="cesi"></button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      data: [],
    }
  },
  methods: {
    // cesi() {
    //   console.log(this.$store.state)
    // },
  },
  mounted() {
    let params = "user_id=1"
    this.axios.post("/query_user_collection", params).then((res) => {
      console.log(res)

      for (let i = 0; i < res.data.result.length; i++) {
        this.data.push(JSON.parse(res.data.result[i].data))
        console.log(JSON.parse(res.data.result[i].data).dishes_id)
      }
      console.log(this.data)
    })
  },
}
</script>

<style lang="scss" scoped></style>

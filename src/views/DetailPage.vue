<template>
  <div v-if="data">
    <van-nav-bar :title="data.dishes_name">
      <template #left>
        <van-icon name="arrow-left" size="18" @click="beforeNav" />
      </template>
      <template #right>
        <van-icon :name="like" size="18" @click="ToLike" />
      </template>
    </van-nav-bar>
    <van-image :src="data.dishes_pic" width="99vw" />
    <ul>
      <li>
        <i>菜品评分：</i>
        <van-rate v-model="value" />
      </li>
      <li>
        <span>所需食材：{{ data.Material }}</span>
      </li>
      <li>
        <span>食物口味：{{ data.taste }}</span>
      </li>
      <!-- <li>
        <span>做菜步骤：{{ data.steps }}</span>
      </li> -->
      <li v-for="(item, index) in steps" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$route.query.item,
      value: 0,
      step: "",
      like: "like-o",
      steps: ["做菜步骤:"],
      dishes_id: [],
    }
  },

  methods: {
    beforeNav() {
      // console.log(this.$router.back)
      this.$router.back()
    },
    ToLike() {
      if (this.like == "like-o") {
        this.like = "like"
        let params = `user_id=1&dishes_id=${this.data.dishes_id}`
        this.axios.post("/add_collection", params).then((res) => {
          console.log(res)
        })
      } else {
        this.like = "like-o"
      }
    },
  },
  mounted() {
    // console.log(this.data)
    this.value = this.data.score
    this.step = this.data.steps
    this.steps.push(...this.step.split(";"))
  },
  created() {
    let params = "user_id=1"
    this.axios.post("/query_user_collection", params).then((res) => {
      console.log(res)
      for (let i = 0; i < res.data.result.length; i++) {
        // console.log()
        this.dishes_id.push(JSON.parse(res.data.result[i].data).dishes_id)
        if (this.data.dishes_id == this.dishes_id[i]) {
          this.like = "like"
        }
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.van-image {
  margin: 10px 0 0 0.5vw;
}
ul {
  padding: 10px;
  li {
    display: block;
    margin: auto;
    padding: 5px;
    border: 1px solid #eee;
  }
}
</style>

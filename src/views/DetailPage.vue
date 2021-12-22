<template>
  <div>
    <van-nav-bar :title="data.dishes_name">
      <template #left>
        <van-icon name="arrow-left" size="18" @click="beforeNav" />
      </template>
      <template #right>
        <van-icon name="like-o" size="18" />
      </template>
    </van-nav-bar>
    <van-image :src="data.dishes_pic" />
    <span>{{ data.Material }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$route.query.item,
    }
  },

  methods: {
    beforeNav() {
      // console.log(this.$router.back)
      this.$router.back()
    },
  },
  mounted() {
    console.log(this.data)
  },
}
</script>

<style lang="scss" scoped></style>

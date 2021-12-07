<template>
  <div>
    <my-header style="margin-bottom: 50px" />
    <van-tabs v-model="active">
      <van-tab title="推荐">
        <van-grid :gutter="10">
          <van-grid-item
            v-for="value in 40"
            :key="value"
            icon="photo-o"
            text="文字1231231232314124"
          />
        </van-grid>
      </van-tab>
      <van-tab title="川菜">川菜</van-tab>
      <van-tab title="鲁菜">鲁菜</van-tab>
      <van-tab title="徽菜">徽菜</van-tab>
      <van-tab title="粤菜">粤菜</van-tab>
      <van-tab title="江苏菜">江苏菜</van-tab>
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
    }
  },
}
</script>

<style lang="scss" scoped></style>

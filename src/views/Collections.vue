<template>
  <div>
    <van-divider
      :style="{ color: 'red', borderColor: 'red', padding: '0 16px' }"
    >
      我的收藏
    </van-divider>
    <!-- <van-grid :column-num="2">
      <van-grid-item
        v-for="value in 20"
        :key="value"
        icon="photo-o"
        text="我的收藏"
      /> -->
    <!-- </van-grid> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="scss" scoped></style>

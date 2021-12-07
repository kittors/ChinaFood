<template>
  <div>
    <van-nav-bar
      title="首页"
      :left-text="onactive ? '返回' : ''"
      :left-arrow="onactive"
      fixed
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onactive: true,
    }
  },
}
</script>

<style lang="scss" scoped></style>

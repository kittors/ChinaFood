<template>
  <div>
    <van-tabbar fixed v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item badge="3" to="/collections">
        <span>收藏</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" :badge="g_badge" to="/login"
        >个人</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" :badge="s_badge" to="/setting"
        >设置</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      g_badge: 20,
      s_badge: 20,
      icon: {
        active: require("../assets/icon/collection_a.svg"),
        inactive: require("../assets/icon/collection_i.svg"),
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

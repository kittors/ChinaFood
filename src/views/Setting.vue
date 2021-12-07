<template>
  <div>
    <van-cell-group>
      <van-cell title="账号与安全" is-link />
      <van-cell title="隐私设置" is-link value="内容" />
      <van-cell title="通知设置" is-link arrow-direction="down" value="内容" />
      <van-switch-cell v-model="checked" title="深色模式" />
      <van-cell title="帮助与客服" is-link />
      <van-cell title="关于美食中国" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>

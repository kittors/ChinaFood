<template>
  <div>
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="pattern"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '请输入正确的手机号' }]"
      />
      <van-field
        v-model="value2"
        name="pattern"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      pattern: /\d{6}/,
      phone: /^1[3,9]\d{9}$/,
    }
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /^1[3,9]\d{9}$/.test(val)
    },
  },
}
</script>

<style lang="scss" scoped></style>

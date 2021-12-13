<template>
  <div class="tab">
    <div class="title">用户注册</div>
    <div>
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          class="phone"
          v-model="value1"
          name="phone"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ phone, message: '请输入正确手机号' }]"
        />
        <van-field
          class="password"
          v-model="value2"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ password, message: '只能由6-20个字母、数字、下划线' }]"
        />
        <van-field
          class="password"
          type="password"
          v-model="value3"
          name="validator"
          label="验证密码"
          placeholder="请再次输入密码"
          :rules="[{ validator, message: '密码与上面不一致,请重新输入密码' }]"
        />
        <van-checkbox v-model="checked" style="margin-top: 20px">
          我已阅读并同意
          <router-link to="/">用户协议</router-link>
          和
          <router-link to="/">隐私政策</router-link>
        </van-checkbox>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            :disabled="!checked"
          >
            注册
          </van-button>
        </div>
      </van-form>
      <van-divider
        :style="{
          color: '#1989fa',
          borderColor: '#1989fa',
          padding: '0 16px',
        }"
      >
        or
      </van-divider>
      <div style="margin: 16px">
        <van-button round block to="/login"> 登录 </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      value1: "",
      value2: "",
      value3: "",
      phone: /^1[3,9]\d{9}$/,
      password: /^(\w){6,20}$/, //只能输入6-20个字母、数字、下划线
    }
  },
  methods: {
    onFailed(errorInfo) {
      console.log("failed", errorInfo)
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      if (this.value3 == this.value2) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tab {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  .title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
  .phone {
    border: 1px solid #ebedf0;
  }
  .password {
    border: 1px solid #ebedf0;
  }
}
</style>

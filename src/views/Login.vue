<template>
  <div class="tab">
    <div class="title">用户登录</div>
    <div>
      <van-form validate-first @failed="onFailed" @submit="onSubmit">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="pwd"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
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
            登录
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
        <van-button round block to="/register"> 注册 </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      username: "",
      pwd: "",
      password: /^(\w){6,20}$/, //只能输入6-20个字母、数字、下划线
    }
  },
  methods: {
    onFailed(errorInfo) {
      console.log("failed", errorInfo)
    },
    onSubmit(values) {
      // console.log("submit", values)
      let params = `username=${this.username}&password=${this.pwd}`
      this.axios.post("/login", params).then((res) => {
        console.log(res)
        if (res.data.code == 200) {
          console.log("登录成功")
        } else {
          console.log("登录失败")
        }
      })
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

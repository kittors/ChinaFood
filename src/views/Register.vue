<template>
  <div class="tab">
    <div class="title">用户注册</div>
    <div>
      <van-form validate-first @failed="onFailed" @submit="onSubmit">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          class="username"
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          class="email"
          v-model="email"
          name="pattern"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ pattern, message: '请输入正确邮箱' }]"
        />
        <van-field
          class="password"
          v-model="pwd"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ password, message: '只能由6-20个字母、数字、下划线' }]"
        />
        <van-field
          class="password"
          type="password"
          v-model="yz_pwd"
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
      username: "",
      pwd: "",
      yz_pwd: "",
      email: "",
      pattern:
        /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, //邮箱正则验证
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
    onSubmit(values) {
      // console.log(values)
      let params = `email=${this.email}&password=${this.pwd}&username=${this.username}`
      this.axios.post("/register", params).then((res) => {
        // console.log(res)
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
  .username,
  .email,
  .password {
    border: 1px solid #ebedf0;
  }
}
</style>

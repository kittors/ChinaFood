<template>
  <div class="tab" @click="check">
    <div class="title">一起发现美食</div>
    <div>
      <van-form validate-first @failed="onFailed" @submit="onSubmit">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          :placeholder="pu"
          :rules="[{ required: true, message: '请填写用户名' }]"
          ref="input_user"
          class="user"
        />
        <van-field
          v-model="pwd"
          type="password"
          name="密码"
          label="密码"
          :placeholder="pd"
          :rules="[{ required: true, message: '请填写密码' }]"
          class="pd"
          ref="input_pd"
        />
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
        <van-button round block to="/register" @click.stop> 注册 </van-button>
      </div>
    </div>
    <van-checkbox v-model="checked" style="margin-top: 40px; font-size: 12px">
      我已阅读并同意
      <router-link to="#">用户协议</router-link>
      和
      <router-link to="#">隐私政策</router-link>
    </van-checkbox>
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
      pd: "密码",
      pu: "用户名",
    };
  },
  methods: {
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
      this.pu = "";
      this.$dialog
        .alert({
          message: "用户名和密码不能为空",
        })
        .then(() => {
          // on close
        });
    },
    onSubmit(values) {
      // console.log("submit", values)
      let params = `username=${this.username}&password=${this.pwd}`;
      this.axios.post("/login", params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          console.log("登录成功");
          this.$store.dispatch("getUser", this.username);
          this.$router.replace("/aboutme");
        } else {
          console.log("登录失败");
          this.onload;
          this.$dialog
            .alert({
              message: "用户名或者密码错误",
            })
            .then(() => {
              // on close
            });
        }
      });
    },
    check() {
      // 为了删除placeholder的内容
      let reg = /^((?!error).)*$/;
      let u_string = this.$refs.input_user.$el.className;
      let bool = reg.test(`${u_string}`);
      if (!bool) this.pu = "";
      let pd_string = this.$refs.input_pd.$el.className;
      let bool2 = reg.test(`${pd_string}`);
      if (!bool2) this.pd = "";
    },
  },
};
</script>
<style>
/* 警告文字的样式 */
div.van-field__error-message {
  position: absolute;
  top: 0;
  font-size: 14px;
}
</style>

<style lang="scss" scoped>
.tab {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  .title {
    font-size: 28px;
    position: fixed;
    font-weight: bold;
    text-align: center;
    top: 50px;
  }
  .phone {
    border: 1px solid #ebedf0;
  }
  .password {
    border: 1px solid #ebedf0;
  }
}
</style>

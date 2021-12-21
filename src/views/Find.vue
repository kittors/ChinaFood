<template>
  <div>
    <div class="tu">
      <img class="bj" :src="require('/public/find/bj.jpg')" alt="" />
      <img :src="require('/public/avatar/0.jpg')" alt="" class="avatar-zj" />
    </div>
    <div class="content">
      <img :src="require('/public/avatar/1.jpg')" class="avatar" />
      <span class="name">小巧的猪猪</span>
      <span class="art">冬至要记得吃饺子呀!</span>
      <img :src="require('/public/find/jz.jpg')" class="nr" />
    </div>
    <div class="content">
      <img :src="require('/public/avatar/1.jpg')" class="avatar" />
      <span class="name">小巧的猪猪</span>
      <span class="art">冬至要记得吃饺子呀!</span>
      <img :src="require('/public/find/jz.jpg')" class="nr" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tu {
  width: 100vw;
  height: 35vh;
  position: relative;
}
.bj {
  width: 100vw;
  height: 35vh;
}
.avatar-zj {
  border-radius: 10px;
  position: absolute;
  right: 8vw;
  top: 28vh;
}
.content {
  width: 100vw;
  height: 37vh;
  margin-top: 40px;
  position: relative;
}
.avatar {
  width: 50px;
  border-radius: 5px;
  position: absolute;
  left: 15px;
}
.name {
  font-size: 20px;
  color: #195795;
  position: absolute;
  left: 80px;
}
.art {
  font-size: 17px;
  position: absolute;
  left: 80px;
  top: 30px;
}
.nr {
  width: 55vw;
  height: 25vh;
  position: absolute;
  left: 80px;
  top: 75px;
}
</style>

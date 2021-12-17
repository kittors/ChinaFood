<template>
  <div>
    <router-view />
    <my-footer style="margin-top: 50px" v-show="show" />
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue"

export default {
  components: { MyFooter },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="scss" scoped></style>

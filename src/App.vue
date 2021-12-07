<template>
  <div>
    <router-view />
    <my-footer style="margin-top: 50px" />
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue"

export default {
  components: { MyFooter },
}
</script>

<style lang="scss" scoped></style>

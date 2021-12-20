<template>
  <div>这是detailpage页面</div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$route.query.item,
    }
  },
  mounted() {
    console.log(this.data)
  },
}
</script>

<style lang="scss" scoped></style>

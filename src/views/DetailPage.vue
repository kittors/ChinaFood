<template>
  <div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$route.query.item,

    }
  },
  methods: {
    
  },
  mounted() {
    console.log(this.data)
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="call-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'CallTop'
}
</script>

<style lang="scss" scoped>
  .call-top {
    position: fixed;
    width: 43px;
    height: 43px;
    bottom: 55px;
    right: 20px;
    img {
      width: 100%;
    }
  }
</style>
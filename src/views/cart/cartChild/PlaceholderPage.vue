<template>
  <div class="PlaceholderPage">
    <div class="icon"></div>
    <p class="title">购物车空空如也，去逛逛吧~</p>
  </div>
</template>

<script>
export default {
  name: 'PlaceholderPage'
}
</script>

<style lang="scss" scoped>
  .PlaceholderPage {
    padding: 70px 0;
    text-align: center;
    .icon {
      width: 90px;
      height: 90px;
      margin: 0 auto;
      background:url(//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png) no-repeat 50%/100%;
      margin-bottom: 20px;
    }
    .title {
      font-size: 15px;
    }
  }
</style>
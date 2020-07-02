<template>
  <div class="nav">
    <div class="left iconfont" @click="toNewPage"><slot name="left">&#xe60a;</slot></div>
    <div class="center iconfont"><slot name="center"/></div>
    <div class="right iconfont"><slot name="right">&#xe701;</slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    url: {
      type: String,
      default: '/body'
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    toNewPage() {
      this.$router.push(this.url)
    },
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    font-size: 14px;
    color: #666;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    .left,.right {
      width: 15%
    }
    .center {
      flex: 1;
    }
  }
</style>

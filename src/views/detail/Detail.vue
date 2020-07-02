<template>
  <div>
    <navbar>
      <div slot="center" class="nav-center">
        <div class="nav-item" v-for="item of ['商品','参数','评论','推荐']" :key="item">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null
    }
  },
  components: {
    Navbar
  },
  activated() {
    this.iid = this.$route.params.iid
  }
}
</script>

<style lang="scss" scoped>
 .nav-center {
    box-sizing: border-box;
    padding: 0 30px;
    display: flex;
    align-items: center;
    font-size: 14px;
    .nav-item {
      flex:1;
      height: 100%;
      line-height: 40px;
    }
 }
</style>
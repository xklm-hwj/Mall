<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="left" @click="callBack">&#xe60a;</div>
      <div slot="center">购物车</div>
    </navbar>
    <b-scroll class="content" ref="scroll">
      <cart-list v-if="cartList.length>0" :cartList="cartList"/>
      <placeholder-page v-else/>
      <gap>可能你还想要</gap>
      <goods :goods="recommendList"/>
    </b-scroll>
    <submit-bar :cartList="cartList"></submit-bar>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import Goods from 'components/goods/Goods'
import BScroll from 'components/scroll/BScroll'
import PlaceholderPage from './cartChild/PlaceholderPage'
import CartList from './cartChild/CartList'
import SubmitBar from './cartChild/SubmitBar'
import Gap from 'components/gap/Gap'
import {getRecommend} from 'api/detail'
import {getCategoryDetail} from 'api/category'
import {mapGetters} from 'vuex'
export default {
  name: 'Cart',
  components: {
    Navbar,
    BScroll,
    PlaceholderPage,
    CartList,
    SubmitBar,
    Goods,
    Gap,
    reload: false
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  data() {
    return {
      // cartList: localStorage.getItem('cartList')
      recommendList: []
    }
  },
  created(){
    this._getRecommend()
  },
  methods: {
    callBack() {
      this.$router.back(-1)
    },
    _getRecommend() {
      getCategoryDetail("10062603",'pop').then(res => {
        this.recommendList = res
      })
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
  }
  .cart {
    position: relative;
    height: 100vh;
    // padding: 40px 0;
    background-color: #f7f7f7;
  }
  .content {
    width: 100%;
    position: absolute;
    top: 40px;
    bottom: 100px;
    overflow: hidden;
  }
</style>
<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="left" @click="callBack">&#xe60a;</div>
      <div slot="center">购物车</div>
    </navbar>
    <cart-list v-if="cartList.length>0" :cartList="cartList"/>
    <placeholder-page v-else/>
    <gap>可能你还想要</gap>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import PlaceholderPage from './cartChild/PlaceholderPage'
import CartList from './cartChild/CartList'
import Gap from './cartChild/Gap'

import {mapGetters} from 'vuex'
export default {
  name: 'Cart',
  components: {
    Navbar,
    PlaceholderPage,
    CartList,
    Gap
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  data() {
    return {
      // cartList: localStorage.getItem('cartList')
    }
  },
  methods: {
    callBack() {
      this.$router.back(-1)
    }
  },
  activated() {
    this.$store.commit('cart/setCartList',JSON.parse(localStorage.getItem('cartList'))? JSON.parse(localStorage.getItem('cartList')):[])
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
  }
  .cart {
    height: 100vh;
    background-color: #f7f7f7;
  }
</style>
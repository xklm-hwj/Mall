<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tabbar :tabbarList="tabbarList" />
  </div>
</template>

<script>
import Tabbar from 'components/tabbar/Tabbar'
import {mapGetters} from 'vuex'
export default {
  name: 'Body',
  components: {Tabbar},
  data() {
    return {
      tabbarList: [
        {
          title: '首页',
          path: '/body',
          icon:'home-o'
        },
        {
          title: '分类',
          path: '/body/category',
          icon:'qr'
        },
        {
          title: '购物车',
          path: '/body/cart',
          icon:'shopping-cart-o'
        },
        {
          title: '我的',
          path: '/body/profile',
          icon:'manager-o'
        },
      ]
    }
  }
}
</script>

<style>

</style>
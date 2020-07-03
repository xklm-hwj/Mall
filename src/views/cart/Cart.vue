<template>
  <div class="cart">
    <Navbar>
      <div slot="left" @click="callBack">&#xe60a;</div>
      <div slot="center">购物车</div>
    </Navbar>
    <placeholder-page />
    <gap>可能你还想要</gap>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import PlaceholderPage from './cartChild/PlaceholderPage'
import Gap from './cartChild/Gap'
export default {
  name: 'Cart',
  components: {
    Navbar,
    PlaceholderPage,
    Gap
  },
  methods: {
    callBack() {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  height: 100vh;
  background-color: #f7f7f7;
}
</style>
<template>
  <div class="bottom-bar">
    <!-- <div class="bar-left">
      <div>
        <i class="icon icon-a"></i>
        <div>客服</div>
      </div>
      <div>
        <i class="icon icon-b"></i>
        <div>店铺</div>
      </div>
      <div>
        <i class="icon icon-c"></i>
        <div>收藏</div>
      </div>
    </div>
     <div class="bar-right">
       <div class="addCart" @click="addCart">加入购物车</div>
       <div class="buy" @click="toBuy">购买</div>
    </div> -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="chat" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" :badge="cartList.length" @click="showCart" text="购物车" />
      <van-goods-action-icon :icon="color?'star':'star-o'" :text="color?'已收藏':'收藏'" :color="color?'#ff5000':''" @click="color=!color"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买" @click="toBuy"/>
    </van-goods-action>
    <div class="cart" v-show="isShow">
      <b-scroll class="content">
        <cart-list v-show="cartList.length>0" :cartList="cartList"/>
        <placeholder-page v-show="cartList.length==0" />
      </b-scroll>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import CartList from 'views/cart/cartChild/CartList'
import PlaceholderPage from 'views/cart/cartChild/PlaceholderPage'
import BScroll from 'components/scroll/BScroll'
import { GoodsAction, GoodsActionIcon, GoodsActionButton,Toast } from 'vant'
import {getToken} from 'utils/auth'
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

export default {
  name: 'BottomBar',
  data() {
    return {
      isLogin: getToken(),
      color: false,
      isShow: false
    }
  },
  components: {
    CartList,
    BScroll,
    PlaceholderPage
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    chat() {
      Toast.success('联系客服qq:1289323257')
    },
    addCart() {
      this.$emit('addCart')
    },
    toBuy() {
      this.$emit('toBuy')
    },
    showCart(){
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  bottom: 50px;
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  .content {
    position: absolute;
    width: 95%;
    right: 0;
    left: 0;
    margin: 0 auto;
    height: 100%;
  }
}
  // .bottom-bar {
  //   position: fixed;
  //   bottom: 0;
  //   width: 100%;
  //   height: 50px;
  //   display: flex;
  //   background-color: #fff;
  //   text-align: center;
  //   div {
  //     flex: 1;
  //   }
  //   .bar-left{
  //     display: flex;
  //     align-items: center;
  //     .icon {
  //       display: inline-block;
  //       width: 22px;
  //       height: 22px;
  //       background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
  //       vertical-align: middle;
  //     }
  //     .icon-a {
  //       background-position:0 -51px;
  //     }
  //     .icon-b {
  //       background-position:0 -100px;
  //     }
  //     .icon-c {
  //       background-position: 0 0;
  //     }
  //   }
  //   .bar-right {
  //     display: flex;
  //     line-height: 50px;
  //     font-size: 15px;
  //     .addCart {
  //       background-color:#ffe817;
  //       color: #333;
  //     }
  //     .buy {
  //       background-color: #f69;
  //       color: #fff;
  //     }
  //   }
  // }
</style>
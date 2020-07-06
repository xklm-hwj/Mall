<template>
  <div class="bottom-bar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="chat" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" :badge="cartList.length" @click="showCart" text="购物车" />
      <van-goods-action-icon :icon="color?'star':'star-o'" :text="color?'已收藏':'收藏'" :color="color?'#ff5000':''" @click="onStar"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买" @click="toBuy"/>
    </van-goods-action>
    <transition name="change">
      <div class="cart" v-show="isShow" :class="{'shake':cartShake}">
      <div class="icon" @click="noShow"></div>
      <div class="toCart" @click="toCart" >前往购物车
        <span class="iconfont">&#xe601;</span>
      </div>
      <b-scroll class="content" ref="scroll">
        <cart-list v-show="cartList.length>0" :cartList="cartList"/>
        <placeholder-page v-show="cartList.length==0" />
      </b-scroll>
    </div>
    </transition>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import CartList from 'views/cart/cartChild/CartList'
import PlaceholderPage from 'views/cart/cartChild/PlaceholderPage'
import BScroll from 'components/scroll/BScroll'
import {GoodsAction, GoodsActionIcon, GoodsActionButton,Toast,Sku} from 'vant'
import {getToken} from 'utils/auth'
Vue.use(Sku);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

export default {
  name: 'BottomBar',
  data() {
    return {
      isLogin: getToken(),
      color: false,
      show: false,
      updata: true,
      sku: {
        tree: [],
        list: [],
        price: 0, // 默认价格（单位元）
        stock_num: 0, // 商品总库存
        collection_id:'',
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            placeholder: '' // 可选值，占位文本
          }
        ]
      },
      goods: {
        picture:''
      },
      messageConfig: {
        // 数据结构见下方文档
      },
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
    },
    isShow: {
      type: Boolean,
      default: false
    },
    cartShake: {
      type: Boolean,
      default: false
    },
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    onAddCartClicked(data) {
      let s1  = data.selectedSkuComb.s1
      data.skuType = this.sku.tree[0].k
      data.price = (data.selectedSkuComb.price/100).toFixed(2)
      data.value = this.sku.tree[0].v[s1].name
      this.$emit('addCart',data)
      setTimeout(() => {
        this.show = false
      }, 500);
    },
    onBuyClicked() {
      this.$emit('toBuy')
      setTimeout(() => {
        this.show = false
      }, 500);
    },
    chat() {
      Toast.success('联系客服qq:1289323257')
    },
    addCart() {
      this.show = true
    },
    toBuy() {
      this.show = true
    },
    showCart(){
      let data = !this.isShow
      this.$emit('onshow',data)
    },
    noShow() {
      this.$emit('onshow',false)
    },
    toCart() {
      this.$router.push('/body/cart')
    },
    onStar() {
      this.color = !this.color
      this.color? Toast.success('收藏成功'):Toast.fail('取消收藏')
    },
    setSku() {
      this.goods.picture = this.good.banner
      this.sku.collection_id = this.good.id
      if(this.paramInfo.sizes){
        let sizeInfo = this.paramInfo.sizes[0][0]
        console.log(sizeInfo)
          this.sku.tree.push({
            k: sizeInfo[0],
            k_s: 's1',
            v: []
          })
          const nprice = this.good.newPrice.match(/\d+\.\d+/)[0]
          this.sku.price = nprice
          for(let j =1;j<sizeInfo.length;j++) {
            this.sku.tree[this.sku.tree.length-1].v.push({
              id: j-1,
              name: sizeInfo[j]
            })
            this.sku.list.push({
              id: this.good.id+j,
              s1: j-1,
              price:nprice*100,
              stock_num:110
            })
          }
          this.sku.stock_num = this.sku.list.length*110
        }
    }
  },
  watch: {
    good() {
      if(this.updata) this.setSku();
      this.updata = false
    }
  },
  created() {
    this.$refs.scroll? this.$refs.scroll.refresh():''
  }
}
</script>

<style lang="scss" scoped>
.change-enter-active {
  animation: change .5s
}
.change-leave-active {
  animation: change .5s reverse
}

@keyframes change {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.van-goods-action {
  z-index: 10;
}
.shake {
  animation: hd 0.5s;
}
@keyframes hd {
    0% {
      transform: translateY(0px);
    }
    50%{
      transform: translateY(20px);
    }
    100%{
      transform: translateY(0px);
    }
}
.cart {
  position: fixed;
  bottom: 50px;
  width: 99%;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 300px;
  background-color: #f7f7f7;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  .icon{
    font-size: 12px;
    position: absolute;
    right: 0px;
    left: 0;
    top: 5px;
    margin: 0 auto;
    width: 30px;
    height: 5px;
    border-top: 2px solid #999;
    border-bottom: 2px solid #999;
  }
  .toCart {
    position: absolute;
    right: 25px;
    color: red;
    line-height: 22px;
  }
  .content {
    border-top: 1px solid #eee;
    box-shadow: 0px 1px #999;
    overflow: hidden;
    position: absolute;
    width: 95%;
    right: 0;
    left: 0;
    margin: 0 auto;
    top: 20px;
    bottom: 0px;
  }
}
</style>
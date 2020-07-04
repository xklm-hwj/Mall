<template>
  <div>
    <navbar class="navbar">
      <div slot="left" @click="callBack">&#xe60a;</div>
      <div slot="center" class="nav-center">
        <div class="nav-item" :class="{'activeNav':activeNav==index}" v-for="(item,index) of ['商品','参数','评论','推荐']" :key="item" @click="navClick(index)">{{item}}</div>
      </div>
    </navbar>
    <swiper :banner="banner" class="swiper"/>
    <detail-info :goods="goods"/>
    <shop-info :shop="shop"/>
    <good-info :detailInfo="detailInfo"/>
    <bottom-bar @addCart="addCart" @toBuy="toBuy" :cartList="cartList"/>

    <!-- <div style="margin-top:100px;box-sizing: border-box;height:200px;font-size:30px;text-align:center;width:100%;line-height: 100px;border: 10px dotted red">
      正在开发中...2020.7.3
    </div> -->
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import BScroll from 'components/scroll/BScroll'
import Swiper from 'components/swiper/Swiper'
import DetailInfo from './detailChild/DetailInfo'
import ShopInfo from './detailChild/ShopInfo'
import GoodInfo from './detailChild/GoodInfo'
import BottomBar from './detailChild/BottomBar'
import {getDetail,Goods,Shop} from 'api/detail'
import {mapGetters} from 'vuex'
import Vue from 'vue';
import { Toast } from 'vant';
import {getToken} from 'utils/auth'
Vue.use(Toast);
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      activeNav: 0,
      banner:[],
      goods:{},
      shop:{},
      detailInfo:{},
      isLogin: getToken()
    }
  },
  components: {
    Navbar,
    BScroll,
    Swiper,
    GoodInfo,
    BottomBar,
    DetailInfo,
    ShopInfo
  },
  activated() {
    this.iid = this.$route.params.iid
    this._getDetail()
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  methods: {
    navClick(index) {
      this.activeNav = index
    },
    _getDetail() {
      getDetail(this.iid).then(res => {
        const data = res.result
        // 获取头部轮播图片
        this.banner = data.itemInfo.topImages
        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.goods.count = 0
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)
        // 获取商品信息
        this.detailInfo = data.detailInfo
        console.log(this.detailInfo)
      })
    },
    callBack() {
      this.$router.back(-1)
    },
    toBuy() {
      if(!this.isLogin){
        Toast.fail('请先登录')
        this.timer = setTimeout(() => {
          this.$router.push("/login")
        },1000)
      }else {
        Toast.fail('条件不允许')
      }
    },
    addCart() {
      const list = this.cartList
      console.log(this.banner[0])
      const img = this.banner[0]
      let good = {
        iid: this.iid,
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.newPrice,
        active: true,
        img,
        count: 1
      }
      let has = false
      if(list.length == 0) {
        list.push(good)
        has = true
      }else {
        for(let item of list) {
          if(item.iid == good.iid){
            has = true
            item.count++
            break
          }
        }
      }
      if(!has) list.push(good)
      this.$store.commit('cart/setCartList',list)
      Toast.success('加入购物车成功')
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    z-index: 10;
  }
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
 .activeNav {
   color: red;
 }
 .swiper {
   height: 350px;
 }
</style>
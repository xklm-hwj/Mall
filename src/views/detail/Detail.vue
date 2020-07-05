<template>
  <div class="detail">
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
    <bottom-bar :paramInfo="paramInfo" :good="goods" @addCart="addCart" @onshow="onshow" @toBuy="toBuy" :isShow='isShow' :cartList="cartList" :cartShake="cartShake"/>
    <param-info :paramInfo = 'paramInfo'/>
    <comment :commentInfo="commentInfo" />
    <recomment :recommendList="recommendList"/>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import BScroll from 'components/scroll/BScroll'
import Swiper from 'components/swiper/Swiper'
import DetailInfo from './detailChild/DetailInfo'
import ParamInfo from './detailChild/ParamInfo'
import ShopInfo from './detailChild/ShopInfo'
import GoodInfo from './detailChild/GoodInfo'
import Comment from './detailChild/Comment'
import Recomment from './detailChild/Recomment'
import BottomBar from './detailChild/BottomBar'
import {getDetail,Goods,Shop,GoodsParam} from 'api/detail'
import {mapGetters} from 'vuex'
import Vue from 'vue';
import { Toast } from 'vant';
import {getToken} from 'utils/auth'
import {getCategoryDetail} from 'api/category'
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
      paramInfo:{},
      commentInfo: [],
      recommendList: [],
      isLogin: getToken(),
      isShow: false,
      cartShake: false,
    }
  },
  components: {
    Navbar,
    BScroll,
    Swiper,
    GoodInfo,
    Comment,
    ParamInfo,
    Recomment,
    BottomBar,
    DetailInfo,
    ShopInfo
  },
  created() {
    console.log('create')
    this.iid = this.$route.params.iid
    this._getDetail()
    this._getRecommend()
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  methods: {
    onshow(data) {
      this.isShow = data
    },
    navClick(index) {
      this.activeNav = index
    },
    _getRecommend() {
      getCategoryDetail("10062603",'pop').then(res => {
        this.recommendList = res
      })
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
        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 2.7.保存评论信息
        data.rate.list?this.commentInfo = data.rate.list:''
        this.goods.banner = this.banner[0]
        this.goods.id = this.iid
      })
    },
    callBack() {
      if(!this.isShow) this.$router.back(-1)
      else{
        this.cartShake = true
        setTimeout(() => {
          this.cartShake = false
        }, 500);
       }
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
    addCart(data) {
      console.log(data)
      const list = this.cartList
      console.log(this.banner[0])
      const img = this.banner[0]
      let good = {
        iid: this.iid,
        id: data.selectedSkuComb.id,
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.newPrice,
        active: true,
        img,
        sku: {
          key: data.skuType,
          value: data.value
        },
        count: data.selectedNum
      }
      let has = false
      if(list.length == 0) {
        list.push(good)
        has = true
      }else {
        for(let item of list) {
          if(item.id == good.id){
            has = true
            item.count+=data.selectedNum
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
 .detail {
   width: 100%;
   position: absolute;
   margin-bottom: 120px;
 }

</style>
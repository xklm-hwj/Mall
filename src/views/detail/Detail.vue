<template>
  <div>
    <navbar>
      <div slot="left" @click="callBack">&#xe60a;</div>
      <div slot="center" class="nav-center">
        <div class="nav-item" :class="{'activeNav':activeNav==index}" v-for="(item,index) of ['商品','参数','评论','推荐']" :key="item" @click="navClick(index)">{{item}}</div>
      </div>
    </navbar>
    <swiper :banner="banner" class="swiper"/>
    <detail-info :goods="goods"/>
    <shop-info :shop="shop"/>
    <detail-info />
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import BScroll from 'components/scroll/BScroll'
import Swiper from 'components/swiper/Swiper'
Shop
import DetailInfo from './detailChild/DetailInfo'
import ShopInfo from './detailChild/ShopInfo'
import {getDetail,Goods,Shop} from 'api/detail'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      activeNav: 0,
      banner:[],
      goods:{},
      shop:{},
      detailInfo:{}
    }
  },
  components: {
    Navbar,
    BScroll,
    Swiper,
    DetailInfo,
    ShopInfo
  },
  created() {
    this.iid = this.$route.params.iid
    this._getDetail()
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
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)
        // 获取商品信息
        this.detailInfo = data.detailInfo
        console.log(this.detailInfo)
      })
    },
    callBack() {
      this.$router.back(-1)
    }
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
 .activeNav {
   color: red;
 }
 .swiper {
   height: 250px;
 }
</style>
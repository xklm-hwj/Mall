<template>
  <div class="home">
    <search @searchImgLoad="searchImgLoad"/>
    <tab-control class="tab-con" :navList="['流行','新款','精选']" v-show="navIsShow" :value="tabValue" @tabIndex="tabClick" ref="nav"/>
    <b-scroll class="content"  ref="scroll"
      @pullingUpClick="pullingUpClick"
      @scroll="scroll"
      :bs="bs"
      :data="[goods[sendType].list]">
        <h-swiper @swiperImgLoad="swiperImgLoad" :banner="banner" class="swiper"/>
        <h-recommend :recommend="recommend" />
        <h-feature  />
        <tab-control  :navList="['流行','新款','精选']" :value="tabValue" @tabIndex="tabClick" ref="nav"/>
        <goods  :goods="goods[sendType].list" />
    </b-scroll>
    <call-top  @click.native="callTop"/>
  </div>
</template>

<script>
import Search from  'components/search/Search'
import HRecommend from  './homeChild/HRecommend'
import HFeature from  './homeChild/HFeature'
import Goods from  'components/goods/Goods'
import CallTop from  'components/callTop/CallTop'
import Swiper from 'components/swiper/Swiper'
import BScroll from 'components/scroll/BScroll'
import TabControl from 'components/tabControl/TabControl'

import {getBanner, getGoods} from 'api/home'
export default {
  name: 'Home',
  components: {
    Search,
    HRecommend,
    HFeature,
    TabControl,
    Goods,
    CallTop,
    BScroll,
    HSwiper: Swiper
  },
  data() {
    return {
      banner:[],
      recommend: [
        {image:require('../../assets/image/icon4.png'),title:"十点抢卷"},
        {image:require('../../assets/image/icon2.png'),title:"特卖服装"},
        {image:require('../../assets/image/icon6.png'),title:"会员专享"},
        {image:require('../../assets/image/icon1.png'),title:"超市上新"},
      ],
      goods: {
        'pop':{
          page: 1,
          list: []
        },
        'new': {
          page: 1,
          list: []
        },
        'sell': {
          page: 1,
          list: []
        }
      },
      sendType: 'pop',
      bs: {
        probeType: 3,
        pullUpLoad: true
      },
      callTopIsShow: false,
      navIsShow: false,
      tabValue: 0.,
      finish:false,
      searchLoad:false
    }
  },
  computed: {
    navTop() {
      return this.$refs.nav.$el.offsetTop
    }
  },
  mounted() {
    this.$refs.scroll&&this.$refs.scroll.refresh()
    getBanner().then(res => {
      this.banner = res.data.banner.list.reverse()
      this.banner.splice(3,1)
      // this.recommend = res.data.recommend.list
      this.getGoodList('pop')
      this.getGoodList('sell')
      this.getGoodList('new')
    })
  },
  activated() {
    this.$refs.scroll&&this.$refs.scroll.refresh()
  },
  methods: {
    searchImgLoad() {
      this.searchLoad = true
    },
    swiperImgLoad() {
      console.log('finish')
      this.finish = true
    },
    callTop() {
      this.$refs.scroll.scrollTo(-this.navTop)
    },
    scroll(po) {
      if(-po.y>1000) this.callTopIsShow = true
      else this.callTopIsShow = false
      if(-po.y>this.navTop) this.navIsShow = true
      else this.navIsShow = false
    },
    pullingUpClick() {
      this.getGoodList(this.sendType)
      this.pullingUp = !this.pullingUp
    },
    getGoodList(type) {
      const page = this.goods[type].page++
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
    },
    tabClick(index) {
      this.tabValue = index
      switch(index) {
        case 1:
          this.sendType = 'new'
          break
        case 2:
          this.sendType = 'sell'
          break
        default:
          this.sendType = 'pop'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    height: 100vh;
    .tab-con {
      position: absolute;
      width: 100%;
      top: 50px;
      margin: 0
    }
  }
  .content {
    width: 100%;
    position: absolute;
    top: 54px;
    bottom: 50px;
    overflow: hidden;
  }
  .swiper {
    width: 92%;
    height: 155px;
    border-radius: 15px;
  }
</style>
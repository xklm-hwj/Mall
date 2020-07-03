<template>
  <div class="home">
    <search />
    <tab-control :navList="['流行','新款','精选']" v-show="navIsShow" :value="tabValue" @tabIndex="tabClick" ref="nav"/>
    <b-scroll class="content"  ref="scroll"
      @pullingUpClick="pullingUpClick"
      @scroll="scroll"
      :bs="bs"
      :data="[goods[sendType].list]">
        <h-swiper :banner="banner" class="swiper"/>
        <h-recommend :recommend="recommend" />
        <h-feature />
        <tab-control :navList="['流行','新款','精选']" :value="tabValue" @tabIndex="tabClick" ref="nav"/>
        <goods :goods="goods[sendType].list" />
    </b-scroll>
    <call-top v-show="callTopIsShow" @click.native="callTop"/>
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
      recommend: [],
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
      tabValue: 0
    }
  },
  computed: {
    navTop() {
      return this.$refs.nav.$el.offsetTop
    }
  },
  mounted() {
    getBanner().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      this.getGoodList('pop')
      this.getGoodList('sell')
      this.getGoodList('new')
    })
  },
  activated() {
    setTimeout(() => {
      console.log(1111)
      this.$refs.scroll.refresh()
    }, 200);
  },
  methods: {
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
  .content {
    width: 100%;
    position: absolute;
    top: 54px;
    bottom: 50px;
    overflow: hidden;
  }
  .swiper {
    width: 90%;
    height: 180px;
    border-radius: 10px;
  }
</style>
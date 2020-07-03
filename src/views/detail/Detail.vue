<template>
  <div>
    <navbar>
      <div slot="center" class="nav-center">
        <div class="nav-item" :class="{'activeNav':activeNav==index}" v-for="(item,index) of ['商品','参数','评论','推荐']" :key="item" @click="navClick(index)">{{item}}</div>
      </div>
    </navbar>
    <swiper :banner="banner" class="swiper"/>
    <detail-info :goods="goods"/>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import BScroll from 'components/scroll/BScroll'
import Swiper from 'components/swiper/Swiper'

import DetailInfo from './detailChild/DetailInfo'
import {getDetail,Goods} from 'api/detail'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      activeNav: 0,
      banner:[],
      goods:{}
    }
  },
  components: {
    Navbar,
    BScroll,
    Swiper,
    DetailInfo
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
        console.log(res)
        this.banner = res.result.itemInfo.topImages
        this.goods = new Goods(res.result)
      })
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
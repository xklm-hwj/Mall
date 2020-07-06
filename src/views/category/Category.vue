<template>
  <div>
    <search />
    <div class="category">
      <BScroll class="categoryList" :data='[categoryList]' @scroll="aScroll">
        <category-list @checkType="checkType" class="category-left" :categoryList="categoryList"/>
      </BScroll>
      <BScroll class="supcategory" @scroll="scroll" :data='[subcategory,categoryDetailList[categoryDetail]]' ref="scroll" :class="{'show':goodsIsShow}">
        <subcategory-list :subcategoryList="subcategory" class="category-right" />
        <tab-control @tabIndex="tabIndex" :value='tabValue' :navList="['综合','新品','销量']"/>
        <goods  :goods="categoryDetailList[categoryDetail]" />
      </BScroll>
      <call-top @click.native="toTop" v-show="callTopIsShow"/>
    </div>
  </div>
</template>

<script>
import {getCategory,getSubcategory,getCategoryDetail} from 'api/category'
import Search from  'components/search/Search'
import Navbar from 'components/navbar/Navbar.vue'
import BScroll from "components/scroll/BScroll"
import CallTop from "components/callTop/CallTop"
import goods from "components/goods/Goods"
import TabControl from "components/tabControl/TabControl"
import categoryList from './categoryChild/CategoryList'
import subcategoryList from './categoryChild/SubcategoryList'
export default {
  name: 'Category',
  components: {
    Search,
    BScroll,
    Navbar,
    goods,
    TabControl,
    CallTop,
    categoryList,
    subcategoryList
  },
  data() {
    return {
      categoryList: [],
      subcategory: [],
      category_index: 0,
      categoryDetailList: {
        'pop':[],
        'new':[],
        'sell':[]
      },
      categoryDetail: 'pop',
      callTopIsShow:false,
      tabValue: 0,
      goodsIsShow: true
    }
  },
  async created() {
    await getCategory().then(res => {
      this.categoryList = res.data.category.list
    })
    this._getSubcategory()
    this._getCategoryDetail('pop')
    this._getCategoryDetail('new')
    this._getCategoryDetail('sell')
  },
  activated() {
    this.$bus.$emit('scrollRefresh')
  },
  methods: {
    aScroll() {

    },
    scroll({x,y}) {
      console.log(y)
      this.callTopIsShow = -y>1200? true:false
    },
    toTop() {
      this.$refs.scroll.scrollTo(-10,200)
    },
    tabIndex(index) {
      this.tabValue = index
      switch(index) {
        case 1:
          this.categoryDetail = 'new'
          break
        case 2:
          this.categoryDetail = 'sell'
          break
        default:
          this.categoryDetail = 'pop'
          break
      }
    },
    _getSubcategory() {
      getSubcategory(this.categoryList[this.category_index].maitKey).then(res => {
        this.subcategory = res.data.list
      })
    },
    checkType(index) {
      this.goodsIsShow = false
      this.$refs.scroll.scrollTo(-10,0)
      this.category_index = index
      this.tabValue = 0
      this.categoryDetail = 'pop'
      this._getSubcategory()
      this._getCategoryDetail('pop')
      setTimeout(() => {
        this.goodsIsShow = true
      }, 200);
    },
    _getCategoryDetail(type) {
      getCategoryDetail(this.categoryList[this.category_index].miniWallkey,type).then(res => {
        this.categoryDetailList[type] = res
        console.log()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
  }
  .categoryList {
    width: 21%;
    position: absolute;
    top: 54px;
    bottom: 50px;
    overflow: hidden;
    border-radius: 15px;
  }
  .supcategory {
    width: 80%;
    position: absolute;
    left: 20%;
    top: 54px;
    bottom: 50px;
    overflow: hidden;
    opacity: 0;
    transition: all .2s;
    .category-right {
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      border-radius: 15px;
    }
  }
  .show {
    opacity: 1
  }
</style>
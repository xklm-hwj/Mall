<template>
  <div>
    <navbar>
      <div slot="center" class="nav-center">
        <div class="nav-item" :class="{'activeNav':activeNav==index}" v-for="(item,index) of ['商品','参数','评论','推荐']" :key="item" @click="navClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import {getDetail} from 'api/detail'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      activeNav: 0
    }
  },
  components: {
    Navbar
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
</style>
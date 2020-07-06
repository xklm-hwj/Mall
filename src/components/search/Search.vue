<template>
   <form action="/" class="search">
   <img src="../../assets/image/bg.jpg" alt="" class="img">
      <van-search
        v-model="value"
        placeholder="别搜了，没有接口~~~"
      />
    </form>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  name: 'Search',
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .img {
    width: 100%;
    position: relative;
    z-index: -100;
  }
  .search {
    height: 50px;
  }
  .van-search {
    position: absolute;
    width: 100%;
    top: 0;
    background-color: transparent;
  }
  .van-search__content {
    border-radius: 30px;
  }
</style>
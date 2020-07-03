<template>
  <van-swipe class="my-swipe" :autoplay="3000" loop indicator-color="white">
    <van-swipe-item v-for="(item) of banner" :key="item.acm||item">
      <img class="swipe-img" :src="item.image||item" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue';
import { Search ,Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
export default {
  name: 'Swiper',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang='scss'>
  .my-swipe {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    .swipe-img {
      width: 100%;
    }
  }
</style>
<template>
  <van-swipe class="my-swipe" :autoplay="3000" loop indicator-color="white">
    <van-swipe-item v-for="(item,index) of banner" :key="item.acm||index">
      <img class="swipe-img" :src="item.image||item" @load="onLoad">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue';
import {  Swipe, SwipeItem } from 'vant';
import debounce from 'utils/debounce'
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: 'Swiper',
  data() {
    return {
      imgDebounce: debounce(() => {
        this.$emit('swiperImgLoad')
      },10)
    }
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    onLoad() {
      this.imgDebounce()
    }
  }
}
</script>

<style lang='scss'>
  .my-swipe {
    width: 100%;
    margin: 0 auto;
    .swipe-img {
      width: 100%;
       border-radius: 10px;
    }
  }
</style>
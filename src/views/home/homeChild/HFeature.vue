<template>
  <div class="fea" @click="onRecommend">
    <img src="~assets/img/home/recommend_bg.jpg" alt="特色">
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  name: 'HFeature',
  methods: {
    onRecommend() {
      Toast({
        message: '我只是一张图片~~',
        icon: 'like-o',
      });
    }
  }
}
</script>

<style lang="scss">
  .fea {
    position: relative;
    overflow: hidden;
    
    margin: 0 10px;
    img {
      width: 100.5%;
    }
  }
</style>
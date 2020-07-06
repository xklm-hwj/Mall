<template>
  <div class="good-info" v-if="Object.keys(detailInfo).length>0">
    <div class="desc">
      <div class="icon">
        <div class="icon-1"></div>
      </div>
      <div class="title">{{detailInfo.desc}}</div>
      <div class="icon right">
        <div class="icon-1 right"></div>
      </div>
    </div>
    <div class="detailImage">
      <div class="key">{{detailInfo.detailImage[0].key}}</div>
      <div v-for="(item,index) of detailInfo.detailImage[0].list" :key="index" class="image">
        <img :src="item" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'utils/debounce'
export default {
  name: 'GoodInfo',
  data() {
    return {
      finishLoad: debounce(() =>{
        this.$emit('finishLoad')
      },1000)
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.finishLoad()
    }
  }
}
</script>

<style lang="scss" scoped>
  .good-info {
    padding: 20px 15px;
    border-bottom: 3px solid #f7f7f7;
  }
  .desc {
    position: relative;
    font-size: 14px;
    .icon {
      width: 100px;
      height: 5px;
      border-bottom: 1px solid #a3a3a5;
      .icon-1 {
        width: 5px;
        height: 100%;
        background-color: #333;
      }
    }
    .title {
      margin: 25px 0;
    }
    .right {
      position: absolute;
      right: 0;
    }
  }
  .detailImage {
    margin-top: 60px;
    .key {
      font-size: 15px;
      font-weight: 700;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      margin-bottom: 10px;
    }
    .image{
      img {
        width: 100%;
      }
    }
  }

</style>
<template>
  <div class="recommend" @click="onClick">
    <div v-for="item of recommend" :key="item.acm" class="rem-item">
        <img :src="item.image" alt="推荐" @load="onload" >
        <div>{{item.title}} </div>
    </div>
  </div>
</template>
<script>
import debounce from 'utils/debounce'
import {Toast} from 'vant'
export default {
  name: 'HRecommend',
  data() {
    return {
      finishLoad: debounce(() => {
        this.$emit('finishLoad')
      },80)
    }
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    onload() {
      this.finishLoad()
    },
    onClick() {
      Toast({
        message: '先看看其他吧~~',
        icon: 'like-o',
      });
    }
  }
}
</script>

<style lang='scss' scoped>
  .recommend {
    display: flex;
    justify-content: space-between;
    margin: 20px 15px;
    text-align: center;
    margin-top: 8px;
    background-color: #fff;
    padding: 10px 0;
    border-radius: 15px;
    a {
      color: rgb(139, 160, 172);
    }
    .rem-item {
      flex: 1;
      margin: 0 10px;
      img {
        width: 70%;
        border-radius: 50%;
      }
    }

  }
</style>
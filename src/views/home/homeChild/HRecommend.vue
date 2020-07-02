<template>
  <div class="recommend">
    <div v-for="item of recommend" :key="item.acm" class="rem-item">
      <img :src="item.image" alt="推荐" >
      <div>{{item.title}} </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .recommend {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 8px;
    .rem-item {
      flex: 1; 
      margin: 0 10px;
      img {
        width: 90%;
        margin-bottom: 10px;
        border-radius: 50%;
      }
    }

  }
</style>
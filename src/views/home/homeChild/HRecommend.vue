<template>
  <div class="recommend">
    <div v-for="item of recommend" :key="item.acm" class="rem-item">
      <a :href="item.link">
        <img :src="item.image" alt="推荐" >
        <div>{{item.title}} </div>
      </a>
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
    margin: 20px 10px;
    text-align: center;
    margin-top: 8px;
    color: #fff;
    background-color: #fff;
    padding: 10px 0;
    a {
      color: rgb(139, 160, 172);
    }
    .rem-item {
      flex: 1;
      margin: 0 10px;
      img {
        width: 90%;
        border-radius: 50%;
      }
    }

  }
</style>
<template>
  <div class="order">
    <div v-for="(item,index) of orderList" :key="index" class="list">
      <div class="img" :class="item.img"></div>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    orderList:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .order {
    display: flex;
    text-align: center;
    background-color: #fff;
    width: 100%;
    height: 72px;
    .list {
      flex: 1;
      .img {
        width: 100%;
        height: 42px;
      }
      .title {
        // height: 42px;
        height: 30px;
      }
    }
  }
</style>
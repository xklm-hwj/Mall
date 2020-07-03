<template>
  <div class="info">
    <div class="title">
      {{goods.title}}
    </div>
    <div class="price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <div v-for="(item,index) of goods.columns" :key="index">{{item}}</div>
    </div>
    <div class="services">
      <div v-for="(item,index) of goods.services" :key="index">
        <img v-show="item.icon" :src="item.icon" alt="">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.goods)
    })
  }

}
</script>

<style lang="scss" scoped>
  .info {
    padding: 10px 5px;
    border-bottom: 4px solid #eee;
    .title {
      font-size: 16px;
      color: #222;
      margin: 10px 0;
    }
    .price {
      position: relative;
      margin: 15px 0;
      .newPrice{
        color: #ff5777;
        font-size: 24px;
      }
      .oldPrice {
        font-size: 13px;
        text-decoration: line-through;
        margin: 0 5px;
      }
      .discount {
        display: inline-block;
        position: absolute;
        top: 0;
        color: #fff;
        background-color: #ff5777;
        padding:0 5px;
        border-radius: 8px;
      }
    }
    .columns {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #999;
      height: 30px;
      line-height: 30px;
      border-bottom: 2px solid #eee;
    }
    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      
      // vertical-align: middle;
      div {
        // width: 33%;
        height: 60px;
        line-height: 60px;
        
        img {
          display: inline-block;
          position: relative;
          top: -2px;
          width: 14px;
          height: 14px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
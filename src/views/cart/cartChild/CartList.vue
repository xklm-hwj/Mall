<template>
  <div class="cart-list">
    <div v-for="item of cartList" :key="item.iid" class="good">
      <div class="img">
        <div class="tick">
          <img class="active" src="~assets/img/cart/tick.svg">
        </div>
        <img :src="item.img" alt="">
      </div>
      <div class="detail">
        <div class="title">{{item.title}}</div>
        <div class="desc">简介：{{item.desc}}</div>
        <div class="price">
          <span class="money">{{item.price}}</span>
          <span>x {{item.count}}</span>
        </div>
      </div>
    </div>

    <div style="margin-top:100px;box-sizing: border-box;height:200px;font-size:30px;text-align:center;width:100%;line-height: 100px;border: 10px dotted red">
      正在开发中...2020.7.4
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-list {
    margin-top: 40px;
    .good {
      display: flex;
      padding: 10px 0;
      margin: 0 5px;
      height: 110px;
      overflow: hidden;
      border-bottom: 1px solid rgb(214, 214, 214);;
      .img {
        display: flex;
        width: 30%;
          .tick {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 15px;
            height: 15px;
            border: 2px solid #999;
            padding: 1px;
            border-radius: 50%;
          }
          .active{
            background-color: #ff5777;
            border: 2px solid #ff5777;
          }
        }
        img {
          width: 70%;
          border-radius: 10px;
        }
      }
      .detail {
        flex: 1;
        overflow: hidden;
        margin: 0 10px;
        .title {
          font-size: 15px;
          color: #000;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          // white-space: nowrap;
          white-space: nowrap;
        }
        .desc {
          margin: 10px 0;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price {
          display: flex;
          justify-content: space-between;
          padding: 5px;
          vertical-align: middle;
          font-size: 15px;
          .money {
            color: red;
            
          }
        }
      }
    }
  }
</style>
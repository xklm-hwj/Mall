<template>
  <div class="cart-list">
    <div v-for="(item,index) of cartList" :key="item.id" class="good">
      <div class="img" >
        <div class="tick">
          <img :class="{active:item.active}" @click="changeActive(item)" src="~assets/img/cart/tick.svg">
        </div>
        <img @click="toDetail(item.iid)" :src="item.img" alt="">
      </div>
      <div class="detail">
        <div class="title">{{item.title}}</div>
        <div class="desc">简介：{{item.desc}}</div>
        <div class="price-line">
          <div class="price">￥{{item.price}}</div>
          <div class="count">
            <span class="minus" @click="minusCount(index)" :class="{'disable':item.count=='0'}"></span>
            <div class="input-wrap">
              <input v-model="item.count" class="num" type="tel" @blur="click(index)"/>
            </div>
            <span class="plus" @click="plusCount(index)" ></span>
          </div>
        </div>
        <div class="delect" @click="delect(index)">
           <div class="sku">{{item.sku.key+"："+item.sku.value}}</div>
           <div>移出购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getToken} from 'utils/auth'

export default {
  name: 'CartList',
  data() {
    return {isLogin: getToken}
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    cart() {
      return JSON.stringify(this.cartList)
    }
  },
  watch: {
    cart() {
      console.log("chang  cratList")
      this.$store.commit('cart/setCartList',this.cartList)
    }
  },
  methods: {
    click(index) {
      let count = this.cartList[index].count
      count = count.replace(/[^0-9]/ig,"");
      this.cartList[index].count = count
    },
    minusCount(index) {
      if(this.cartList[index].count)this.cartList[index].count--
    },
    plusCount(index) {
      this.cartList[index].count++
    },
    changeActive(item){
      item.active = !item.active
    },
    delect(index) {
      this.cartList.splice(index,1)
      index==0&&this.$store.commit('cart/setCartList',this.cartList)
    },
    toDetail(iid) {
      this.$router.push('/detail'+iid)
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-list {
    padding: 1px 0;
    .good {
      display: flex;
      padding: 5px 5px;
      margin: 15px 15px;
      height: 120px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 10px;
      border-bottom: 1px solid rgb(214, 214, 214);;
      .img {
        display: flex;
        width: 35%;
          .tick {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 15px;
            height: 15px;
            border: 1px solid rgb(194, 193, 193);
            padding: 1px;
            border-radius: 50%;
          }
          .active{
            background-color: #f2270c;
            border: 2px solid #f2270c;
          }
        }
        img {
          width: 70%;
          border-radius: 10px;
        }
      }
      .detail {
        position: relative;
        flex: 1;
        overflow: hidden;
        margin: 0 10px;
        .title {
          font-size: 15px;
          color: #000;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .desc {
          margin: 3px 0;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          height: 33px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price-line {
          display: flex;
          justify-content: space-between;
          padding: 3px;
          vertical-align: middle;
          font-size: 14px;
          .price {
            color: red;
          }
          .count {
            display: flex;
            align-items: center;
            .input-wrap {
              display: inline-block;
              height: 15px;
              .num {
                height: 15px;
                vertical-align: top;
                text-align: center;
                font-size: 12px;
                width: 25px;
              }
            }
            .minus {
              width: 15px;
              height: 15px;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTCQkJCYmJrxUw5UAAAACdFJOUwB9WCfAuQAAAB1JREFUGNNjYBgIwLZq1aoJIAYXkLEAhQGXGggAAJHVCnlOtZ+AAAAAAElFTkSuQmCC) no-repeat 50%/100%;
            }
            .plus {
              width: 15px;
              height: 15px;
              background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURSUlJUdwTCQkJK/0gvAAAAADdFJOU/8AfWpa/bIAAAArSURBVBjTYwiFgAAG8hkRqlBGACvxjAYGBiYwgwEIUBlwKZIMRDiDfO8AAJNQRyMPYU0tAAAAAElFTkSuQmCC) no-repeat 50%/100%;
            }
            .disable {
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTPLy8vLy8pPT2yEAAAACdFJOUwB9WCfAuQAAAB1JREFUGNNjYBgIwLZq1aoJIAYXkLEAhQGXGggAAJHVCnlOtZ+AAAAAAElFTkSuQmCC) no-repeat 50%/100%;
            }
          }
        }
        .delect {
          display: flex;
          margin-top: 3px;
          justify-content: space-between;
          position: absolute;
          width: 100%;
          overflow: hidden;
          bottom: 0px;
          .sku {
            width: 65%;
             overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
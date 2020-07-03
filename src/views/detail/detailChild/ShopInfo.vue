<template>
  <div class="shop">
    <div class="shop-description">
      <img :src="shop.logo">
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="shop-detail">
      <div class="sells">
        <div class="sells-count count">
          <div class="big">{{shop.sells}}</div>
          <div>总销量</div>
        </div>
        <div class="good-count count">
          <div class="big">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-score">
        <table class="table">
          <tr v-for="(item,index) of shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="not-better-c" :class="{'better-c':item.isBetter}">{{item.score}}</td>
            <td><span class="not-better-bgc" :class="{'better-bgc':item.isBetter}">{{item.isBetter? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
      
    </div>
    <div class="goShop">
        <div class="title">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .shop {
      padding: 25px 15px;
      border-bottom: 3px solid #eee;
      .shop-description {
        line-height: 45px;
        margin: 15px 0;
        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #eee;
          vertical-align: middle;
          margin-right: 10px;
        }
        .name {
          display: inline-block;
          height: 45px;
          font-size: 16px;
        }
      }
      .shop-detail {
        display: flex;
        align-items: center;
        div {
          flex: 1;
        }
        .sells {
          display: flex;
          justify-content: space-evenly;
          border-right: 1px solid #eee;
          .count {
            text-align: center;
              flex-direction:column;
            align-content: center;
          }
        }
      }
      .shop-score {
        font-size: 13px;
        .table {
          width: 120px;
          margin: 0 auto;
          .not-better-c {
            color: #5ea732;
          }
          .better-c {
            color:#f13e3a;
          }
          .not-better-bgc {
            background-color: #5ea732;
            color: #fff;
          }
          .better-bgc {
            background-color:#f13e3a;
          }
        }
      }
      .goShop {
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        text-align: center;
        .title {
            height: 100%;
            display: inline-block;
            font-size: 13px;
            border-radius: 10px;
            background-color:   #f2f5f8;
            padding: 0 10px;
        }
      }
    }
    .big {
      font-size: 18px
    }
</style>
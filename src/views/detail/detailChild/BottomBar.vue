<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="icon icon-a"></i>
        <div>客服</div>
      </div>
      <div>
        <i class="icon icon-b"></i>
        <div>店铺</div>
      </div>
      <div>
        <i class="icon icon-c"></i>
        <div>收藏</div>
      </div>
     
    </div>
     <div class="bar-right">
       <div class="addCart" @click="addCart">加入购物车</div>
       <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #fff;
    text-align: center;
    div {
      flex: 1;
    }
    .bar-left{
      display: flex;
      align-items: center;
      .icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url('~assets/img/detail/detail_bottom.png') 0 0/98%;
        vertical-align: middle;
      }
      .icon-a {
        background-position:0 -52px;
      }
      .icon-b {
        background-position:0 -98px;
      }
      .icon-c {
        background-position: 0 0;
      }
    }
    .bar-right {
      display: flex;
      line-height: 50px;
      font-size: 15px;
      .addCart {
        background-color:#ffe817;
        color: #333;
      }
      .buy {
        background-color: #f69;
        color: #fff;
      }
    }
  }
</style>
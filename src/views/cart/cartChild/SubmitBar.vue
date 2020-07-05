<template>
  <div>
    <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
  <van-checkbox checked-color="red" :value="check" @click="allCheck">全选</van-checkbox>
  <template #tip v-if="!isLogin">
    {{message[0]}}<span @click="onClickEditAddress">{{message[1]}}</span>
  </template>
</van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { SubmitBar,Checkbox,Toast} from 'vant';
import {getToken} from 'utils/auth';

Vue.use(Checkbox);
Vue.use(SubmitBar);
export default {
  name: 'SubmitBar',
  data() {
    return {
      isLogin: getToken()
    }
  },
  computed: {
    message() {
      let message = ['','']
      if(!this.isLogin) {
        message[0] = '未登录账号，登录后可同步购物车，'
        message[1] = '请登录！'
      }
      return message
    },
    price() {
      console.log(this.cartList)
      return this.cartList.filter(item => {
        return item.active
      }).reduce((a,b) => {
        let p = b.price.match(/\d+\.\d+/)[0]? b.price.match(/\d+\.\d+/)[0]:''
        return a+(b.count*p)*100
      },0)
    },
    check() {
      let isAll =  this.cartList.every(item => {
        console.log(item.active)
        return item.active
      })
      return isAll
    }
  },
  activated() {
    this.isLogin = getToken()
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    allCheck() {
      console.log(111)
      let checked = this.check
      console.log(checked)
      this.cartList.forEach(item => {
        console.log("a："+item.active)
        item.active = checked? false:true
        console.log("b："+item.active)
      })
      console.log(this.cartList)
    },
    onClickEditAddress() {
      this.$router.push('/login')
    },
    onSubmit(){
      Toast.fail('支付功能未开发！')
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-submit-bar {
    bottom: 50px;
  }
</style>
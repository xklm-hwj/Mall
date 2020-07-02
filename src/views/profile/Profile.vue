<template>
 <div id="profile">
  <navbar>
    <div slot="center">个人中心</div>
  </navbar>
  <user-info :userinfo="userinfo" class="userinfo" />
  <user-list :orderList="orderList" class="x-list"></user-list>
  <!-- <user-order class="x-list"></user-order> -->
 </div>
</template>

<script>
import userInfo from './profileChild/UserInfo'
import userList from './profileChild/UserList'
import Navbar from 'components/navbar/Navbar'
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  components: {
    userInfo,
    userList,
    Navbar
  },
  computed: {
    ...mapGetters([
      'userinfo'
    ])
  },
  data() {
    return {
      orderList: [
        {
          id: 0,
          img: 'a',
          title: '待付款'
        },
        {
          id: 1,
          img: 'b',
          title: '待收货'
        },
        {
          id: 2,
          img: 'c',
          title: '退款 / 售后'
        },
        {
          id: 3,
          img: 'd',
          title: '全部订单'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  #profile {
    height: 100vh;
    background-color: #f7f7f7;
    .x-list {
      margin: 15px 0;
      .a {
        background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png) 50%/auto 20px no-repeat;
      }
      .b {
            background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png) 50%/auto 20px no-repeat;
      }
      .c {
        background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png) 50%/auto 20px no-repeat;
      }
      .d {
        background: url(https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png) 50%/auto 20px no-repeat;
      }
    }
  }
</style>
<template>
  <div>
    <div class="header">
      <div class="avatar" @click="toSetting">
        <img v-show="hasAvatar" :src="userinfo.avatar">
        <img v-show="!hasAvatar" src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png">
        <div class="name" v-if="userinfo.username">
          <div>
            <span class="">{{userinfo.name? name: '暂无'}}</span>
          </div>
          <div>
            <span class="">{{userinfo.username? userinfo.username:'暂无'}}</span>
          </div>
        </div>
        <div class="name big" v-else>未登录</div>
      </div>
      <div class="me" @click="toSetting">
        <span class="iconfont">&#xe611;</span>
        账户设置
      </div>
      <div class="vip">
          <span @click="toVip">vip免费试用</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'UserInfo',
  props: {
    userinfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    name() {
      return this.userinfo.name? this.userinfo.name : this.userinfo.username
    },
    hasAvatar() {
      return this.userinfo.avatar
    }
  },
  methods: {
    toLogin() {
      // this.$router.push('/login')
      console.log(this.userinfo)
    },
    toSetting() {
      const user = this.userinfo
      this.$router.push({
        path: '/setting',
        query: {user: JSON.stringify(user)}
      })
    },
    toVip() {
      Toast.fail('VIP功能正在策划当中')
    }
  }
}
</script>

<style lang="scss">
  .header {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: -webkit-gradient(linear,left top,right top,from(#ff7459),to(#ebdde1));
    border-radius: 0 0 300px 300px/0 0 20px 20px;
    .avatar {
      color: #fff;
      img {
        width: 60px; 
        border-radius: 50%;
        margin: 10px;
      }
      .name {
        position: absolute;
        top: 40px;
        left: 80px;
      }
      .big {
        top: 50px;
        font-size: 15px;
      }
    }
    .me {
      // width: 50px;
      position: absolute;
      top: 25px;
      right: 10px;
    }
    .vip {
      width: 90%;
      left: 0;
      right: 0;
      margin: 0 auto;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      color: #ffe678;
      height: 30px;
      line-height: 30px;
      text-indent: 3em;
      background: url(https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png) no-repeat 0 0;
      background-size: 100% 67px;
      // border-radius: 0 0 300px 300px/0 0 16px 16px;
    }
  }
</style>
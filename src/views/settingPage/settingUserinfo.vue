<template>
 <div class="current">
    <navbar>
      <div slot="left" @click="back"><i class="iconfont">&#xe60a;</i> </div>
      <div slot="center"><span>账户设置</span></div>
    </navbar>
    <div class="accountArea">
      <div class="title">管理我的账号</div>
      <div class="accout" @click="toLogin">
        <div class="avatar">
          <img v-show="hasAvatar" :src="user.avatar" alt="头像">
          <img v-show="!hasAvatar" src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="头像">
        </div>
        <div v-if="user.username">
          <div class="name">{{user.name}}</div>
          <div>{{user.username}}</div>
        </div>
        <div v-else class="big">
          未登录
        </div>
        <div v-show="user.username" class="account_tip">当前登录</div>
        <div v-show="!user.username" class="account_tip">请点击登录</div>
      </div>
    </div>
    <div class="address action">
      <div class="layout">
        <span class="title">收货管理地址</span>
        <div class="icon">管理我的地址</div>
      </div>
    </div>
    <div class="action">
      <div class="outline layout">
        <span class="title">账户和安全</span>
        <div class="icon">密码实名验证等管理</div>
      </div>
      <div class="layout">
        <span class="title">支付密码</span>
        <div class="icon">未设置</div>
      </div>
    </div>
    <div class="action">
      <div class="outline layout">
        <span class="title">联系客服</span>
        <div class="icon">我有疑问</div>
      </div>
      <div class="layout">
        <span class="title">关于我们</span>
        <div class="icon">了解我们</div>
      </div>
    </div>
 </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
export default {
  name: 'UserSetting',
  components: {Navbar},
  data() {
    return {
      user: {},
    }
  },
  computed: {
    hasAvatar() {
      return this.user.avatar
    }
  },
  methods: {
    toLogin() {
      if(!this.user.username) this.$router.push('/login')
    },
    back() {
      this.$router.back(-1);
    }
  },
  created() {
    
    console.log(this.user)
  },
  activated() {
    this.user = JSON.parse(this.$route.query.user)
  }
}
</script>

<style lang="scss" scoped>
  .current {
    color: #999;
    background-color: #f7f7f7;
    height: 100vh;
    .action {
      background-color: #fff;
      margin-bottom: 15px;
      border-radius: 10px;
      line-height: 44px;
      padding: 0 10px;
    }
    .title {
      font-size: 14px;
      color: #000;
    }
    .outline {
      border-bottom: 1px solid #eee;
    }
    .layout{
      display: flex;
      justify-content: space-between;
    }
    .layout .icon::after {
      content: '';
      display: inline-block;
      position: relative;
      top: 2px;
      left: 3px;
      width: 12px;
      height: 12px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURczMzEdwTM3NzczMzM3NzczMzMzMzDp2jh0AAAAGdFJOU/wAV+NM2CVM3f4AAABXSURBVBjTYxBEAgzoHGcjJI5ZgiISJ40JwXFIg0qBOEJsUCmwaQpQKTAHJgWxByoF4QClWBAuUEhLxs5BUYZsAIrRyJaiOAfFoWHIXghD9pyrCa4AgQMA7gwdk+IuDLcAAAAASUVORK5CYII=);
      background-size: 100%;
    }
  }
  .accountArea{
    background-color: #fff;
    margin-top: 1px;
    margin-bottom: 15px;
    padding:15px 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .title {
      padding-bottom: 15px;
    }
    .big {
      font-size: 15px;
      font-weight: 700;
      color: #e2231a;
    }
    .accout {
      display: flex;
      border: 1px solid #ff414e;
      position: relative;
      background: #fff9f9;
      padding: 20px;
      border-radius: 10px;
      .avatar {
        width: 45px;
        margin-right: 8px;
        img{
          width: 100%;
          border-radius: 50%;
        }
      }
      .name {
        color: #000;
      }
      .account_tip {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        padding: 3px 5px;
        background-color: #ffe4e4;
        color: #e2231a;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
  }
  
</style>
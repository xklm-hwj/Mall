<template>
  <div class="signin" :style="style">
    <navbar>
      <div slot="left" @click="callBack">&#xe60a;</div>
      <div slot='center'>用户注册</div>
    </navbar>
     <form class="form" >
      <div class="input">
        <span class="option">账号：</span>
        <div class="content">
          <input type="text" v-model="user.username" placeholder="请输入数字账号" @input="inputClick">
          <i class="iconfont icon" v-show="user.username" @click="user.username = ''">&#xe603;</i>
        </div>
      </div>
      <div class="input">
        <span class="option" placeholder="请输入密码">密码：</span>
        <div class="content">
          <input :type="PType" v-model="user.password" >
          <i class="iconfont icon" v-show="passwordType" @click="passwordType = !passwordType">&#xe704;</i>
          <i class="iconfont icon" v-show="!passwordType" @click="passwordType = !passwordType">&#xe705;</i>
          <i class="iconfont icon ps-icon" v-show="user.password" @click="user.password = ''">&#xe603;</i>
      </div>
        </div>
      <div class="input">
        <span class="option">昵称：</span>
        <div class="content">
          <input type="text" v-model="user.name" placeholder="输入昵称，可选">
          <i class="iconfont icon" v-show="user.name" @click="user.name = ''">&#xe603;</i>
        </div>
      </div>
      <div class="input">
        <span class="option">手机号：</span>
        <div class="content">
          <input type="text" v-model="user.phone"  @input="inputClick" placeholder="请输入正确的手机号">
          <i class="iconfont icon" v-show="user.phone" @click="user.phone = ''">&#xe603;</i>
        </div>
      </div>
      <div class="button"  >
        <div :class="{'cleck-fail': !check}" @click="signIn">免费注册</div>
        <div class="cleck-fail" @click="fail">手机号快速注册</div>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import { Toast } from 'vant';
export default {
  name: 'Login',
  data() {
    return {
      user: {
      },
      wHeight: 0,
      hidden: true,
      passwordType: true,
      userList: JSON.parse(localStorage.getItem('userList'))?JSON.parse(localStorage.getItem('userList')):[]
    }
  },
  components: {
    Navbar
  },
  computed: {
    style() {
      return {
        height:this.wHeight+'px'
      }
    },
    PType() {
      return this.passwordType? 'password':'text'
    },
    check() {
      const username = this.user.username?this.user.username.replace(/\s+/g,''):false
      const password = this.user.password?this.user.password.trim():false
      const name = this.user.name?this.user.name.trim():false
      const phone = this.user.phone?this.user.phone.trim():false
      // this.user.username&&this.user.password&& this.user.username.replace(/\s/,'').length>=6 && !isNaN( this.user.username.replace(/\s+/,'')*1)&&this.user.password.replace(" ",'').length>=6
      return  username&&password&&phone&& username.length>=6&& phone.length==11 && !isNaN(username*1) && !isNaN(phone*1)&&password.length>=6
    },
    list(){
      return JSON.stringify(this.userList)
    }
  },
  watch: {
    list() {
      localStorage.setItem('userList',JSON.stringify(this.userList))
    }
  },
  methods: {
    signIn() {
      if(this.check){
        let isPush = true
        if(this.userList.length==0) {
          this.userList.push(this.user)
          Toast.success('注册成功')
          setTimeout(() => {
            this.$router.back(-1)
          },1500)
          isPush = false
        }else {
          console.log(22)
          this.userList.forEach(item => {
            if(item.username == this.user.username) isPush = false
            Toast.fail('用户名已存在')
          })
        }
        if(isPush){
          this.userList.push(this.user)
          Toast.success('注册成功')
          setTimeout(() => {
            this.$router.back(-1)
          },1500)
        }
        console.log(JSON.parse(localStorage.getItem('userList')))
      }else {
        // Toast.fail('输入有误！')
      }
    },
    inputClick() {
      console.log(isNaN(this.user.username*1))
    },
    callBack() {
      this.$router.back(-1)
    },
    fail() {
      Toast({
        message: '这玩意要买~~',
        icon: 'like-o',
      });
    }
  }
}
</script>

<style lang="scss" scoped>
 .signin {
   width: 100%;
   height: 100vh;
 }
 .form {
    width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    .input {
      display: flex;
      margin: 20px 0;
      .option {
        width: 20%;
      }
      .content {
        position: relative;
        flex: 1;
        border-bottom: 1px solid red;
        padding-bottom: 5px;
        box-sizing: border-box;
        font-size: 16px;
        input {
          width: 90%
        }
        .icon {
          position: absolute;
          display: inline-block;
          top: 50%;
          transform: translate(-10px,-50%);
          -webkit-transform: translate(-10px,-50%);
        }
        .ps-icon {
          transform: translate(-30px,-50%);
          -webkit-transform: translate(-30px,-50%);
        }
      }
    }
    .button {
      width: 100%;
      text-align: center;
      margin-top: 40px;
      div {
        height: 30px;
        line-height: 30px;
        color: #fff;
        background-color: red;
        margin: 8px 0;
        border-radius: 15px;
        font-size: 18px;
      }
    }
    .cleck-fail {
      background-color: rgba($color: red, $alpha: .5) !important;
    }
 }
</style>
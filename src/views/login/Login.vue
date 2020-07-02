<template>
  <div class="login" :style="style">
    <div class="banner">
      <!-- <img src="~assets/img/profile/banner1.png" alt=""> -->
      <div class="logo-img"></div>
    </div>
    <form class="form">
      <div class="input">
        <input type="text" v-model="user.username" placeholder="手机号/用户名/邮箱" @input="inputClick">
        <i class="iconfont icon" v-show="user.username" @click="user.username = ''">&#xe603;</i>
      </div>
      <div class="input">
        <input :type="PType" v-model="user.password" placeholder="请输入登录密码">
        <i class="iconfont icon" v-show="passwordType" @click="passwordType = !passwordType">&#xe704;</i>
        <i class="iconfont icon" v-show="!passwordType" @click="passwordType = !passwordType">&#xe705;</i>
        <i class="iconfont icon ps-icon" v-show="user.password" @click="this.user.password = ''">&#xe603;</i>
      </div>
      <div class="sign">
        <span>短信验证码登录</span>
        <span>免费注册</span>
      </div>
      <div class="button" :class="{'cleck-fail': !usernameCheck}" @click="login">
        登录
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
      },
      wHeight: 0,
      hidden: true,
      passwordType: true
    }
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
    usernameCheck() {
      return this.user.username&&this.user.username.length>6 && !isNaN(this.user.username*1)&&this.user.password
    }
  },
  methods: {
    login() {
      if(this.usernameCheck) {
        this.$store.dispatch('user/login', this.user).then(response => {
          console.log(response)
          setTimeout(() => {
            this.$router.push("/body/profile")
          }, 500);
        })
      }
    },
    inputClick() {
      console.log(isNaN(this.user.username*1))
    },
    checkout(){
      if(user.name.length<6) {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    background-color: #fff;
    position: relative;
    z-index: 100;
    .banner {
      width: 30%;
      margin: 0 auto;
      padding: 10px 0;
      .logo-img {
        background: no-repeat url("../../assets/img/profile/banner1.png") 0/100%;
        height: 200px;
      }
    }
    .form {
      width: 90%;
      margin: 0 auto;
      .input{
        text-align: center;
        border-bottom: 1px solid #0da5e6;
        margin: 30px 0;
        position: relative;
        input {
          font-size: 15px;
          width: 95%;;
          border: 0;
          margin: 5px 0;
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
        input::placeholder {
          font-size: 13px;
          color: #173535;
        }
      }
      .sign {
        display: flex;
        justify-content: space-between;
        margin: 5px 2px;
      }
      .button {
        width: 100%;
        height: 30px;
        border-radius: 30px;
        background-color: #0da5e6;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        margin: 20px  0;
      }
    }
  }
  .cleck-fail {
    background-color: #a4d4e9 !important;
  }
</style>
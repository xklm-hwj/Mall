<template>
  <div class="signin" :style="style">
    <navbar>
      <div slot="left" @click="callBack">&#xe60a;</div>
      <div slot='center'>用户注册</div>
    </navbar>
     <form class="form">
      <div class="input">
        账号：<input type="text" v-model="user.username" placeholder="请输入数字" @input="inputClick">
        <i class="iconfont icon" v-show="user.username" @click="user.username = ''">&#xe603;</i>
      </div>
      <div class="input">
        密码：<input :type="PType" v-model="user.password" placeholder="请输入登录密码">
        <i class="iconfont icon" v-show="passwordType" @click="passwordType = !passwordType">&#xe704;</i>
        <i class="iconfont icon" v-show="!passwordType" @click="passwordType = !passwordType">&#xe705;</i>
        <i class="iconfont icon ps-icon" v-show="user.password" @click="user.password = ''">&#xe603;</i>
      </div>
      <div class="input">
        昵称：<input type="text" v-model="user.name" placeholder="昵称">
        <i class="iconfont icon" v-show="user.username" @click="user.username = ''">&#xe603;</i>
      </div>
      <div class="input">
        手机号：<input type="text" v-model="user.phone" placeholder="手机号" @input="inputClick">
        <i class="iconfont icon" v-show="user.username" @click="user.username = ''">&#xe603;</i>
      </div>
      <div class="button" :class="{'cleck-fail': !check}" @click="signIn">
        免费注册
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
      return this.user.username&&this.user.username.trim().length>6 && !isNaN(this.user.username*1)&&this.user.password
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
      }
    },
    inputClick() {
      console.log(isNaN(this.user.username*1))
    },
    callBack() {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
 .signin {
   width: 100%;
   height: 100vh;
 }
</style>
<template>
  <van-tabbar :value="path" class="tabbar">
    <!-- <van-tabbar-item icon="home-o" @click="skip('/body/home')">首页</van-tabbar-item>
    <van-tabbar-item icon="qr" @click="skip('/body/category')" dot>分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" @click="skip('/body/cart')" badge="5">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o" @click="skip('/body/profile')" badge="20">我的</van-tabbar-item> -->
    <van-tabbar-item v-for="(item,index) of tabbarList" :key="index" :icon="item.icon"  @click="skip(item.path)">{{item.title}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import {mapGetters} from 'vuex'
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    ...mapGetters([
      'path'
    ])
  },
  props: {
    tabbarList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    skip(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style>
  .tabbar {
    /* position: relative; */
    z-index: 1000;
  }
</style>
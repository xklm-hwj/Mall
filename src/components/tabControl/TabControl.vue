<template>
  <div class="nav">
    <div class="nav-item" :class="{underline: index==value}" v-for="(item,index) of navList" :key="item"  @click="itemClick(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
      navList: {
        type: Array,
        default() {
          return []
        }
      },
      value: {
      type: Number,
      default: 0
    }
  },
  // data() {
  //   return {
  //     value: 0
  //   }
  // },
  methods: {
    itemClick(index) {
      // this.value = index
      this.$emit('tabIndex',index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    position: relative;
    z-index: 10;
    justify-content: space-between;
    text-align: center;
    font-size: 15px;
    height: 40px;
    background-color: #fff;
    margin: 0 10px;
    .nav-item {
      position: relative;
      flex: 1;
      height: 100%;
      line-height: 40px;
    }
    .underline::after {
      content: '';
      display: block;
      position: absolute;
      width: 40%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 4px auto;
      height: 3px;
      background-color: red;
    }
  }
</style>
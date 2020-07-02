<template>
  <div class="category-list">
    <div class="category-list-item" v-for="(item,index) of categoryList"
    :class="{active: index === active}"
    :key="item.acm"
    @click="checkType(index)">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryList',
  props: {
    categoryList:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    checkType(index) {
      this.active = index
      this.$emit('checkType',index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .category-list {
    background-color: #f8f8f8;
    font-size: 14px;
    color: #333;
    line-height: 46px;
    text-indent: .8em;
  }
  .active {
    background-color: #fff;
    font-size: 15px;
    color: red;
    font-weight: 700;
  }
</style>
<template>
  <div class="subcategory-list">
    <div class="subcategory-item" v-for="item of subcategoryList" :key="item.acm">
        <img :src="item.image" :alt="item.title"  @load="onload">
        <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import debounce from 'utils/debounce'

export default {
  name: 'SubcategoryList',
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      imgDebounce: debounce(() => {
        this.$emit('goodsImgLoad')
      },200)
    }
  },
  methods: {
    onload() {
      this.imgDebounce()
    }
  }
}
</script>

<style lang="scss" scoped>
  .subcategory-list {
    background-color: #fff;
    margin: 0 10px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    .subcategory-item {
      width: 33.33333%;
      margin: 5px 0;
      img{
        width: 70%;
      }
    }
  }
</style>
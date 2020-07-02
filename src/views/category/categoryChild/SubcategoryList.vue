<template>
  <div class="subcategory-list">
    <div class="subcategory-item" v-for="item of subcategoryList" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title"  @load="onload">
        <div>{{item.title}}</div>
      </a>
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
        this.$bus.$emit('goodsImgLoad')
      })
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
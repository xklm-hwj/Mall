<template>
  <div class="goods" v-show="show">
    <div v-for="item of goods" :key="item.acm" class="good">
        <img :src="item.img ? item.img:item.show.img" :alt="item.title" @load="onload">
        <div class="title">{{item.title}}</div>
        <div class="detail" v-show="item.price">
          <span class="price">{{item.price | setPrice}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import debounce from 'utils/debounce'
export default {
  name: 'Goods',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      debounce:debounce(()=> {
        this.$bus.$emit('scrollRefresh')
      },100),
      show: false
    }
  },
  created() {
    this.$bus.$on('scrollRefresh',() => {
        this.show = true
    })
  },
  filters: {
    setPrice(p) {
      return `￥${p}`
    }
  },
  methods: {
    onload() {
      this.debounce()
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 15px;
    overflow: hidden;
    .good {
      width: 48%;
      img {
        width: 100%;
        border-radius: 5px;
      }
      .title {
        margin: 2px;
        line-height: 18px;
        font-weight: 700;
        text-align: center;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .detail {
        display: flex;
        justify-content: space-between;
        line-height: 16px;
        margin:0  2px;
        .price {
          color: #f23030;
          font-size: 16px;
        }
        .collect::before {
          content: '';
          vertical-align: middle;
          display: inline-block;
          margin-right: 2px;
          margin-top: -3px;
          width: 16px;
          height: 16px;
          background:  url('../../assets/img/common/collect.svg')  0 0/16px ;
        }
      }
    }
  }
</style>
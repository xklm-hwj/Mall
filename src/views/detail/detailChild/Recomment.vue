<template>
  <div class="recomment">
    <gap>猜你喜欢</gap>
    <goods :goods="recommendList"/>
  </div>
</template>

<script>
import Goods from 'components/goods/Goods'
import Gap from 'components/gap/Gap'
export default {
  name: 'recomment',
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Goods,
    Gap
  }
}
</script>

<style>

</style>
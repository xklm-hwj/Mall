<template>
  <div class="wrapper" ref="wrapper">
    <div class="">
      <slot />
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  props: {
    bs: {
      type: Object,
      default() {
        return {
          probeType: 3,
          pullUpLoad: false
        }
      }
    },
  },
  data() {
    return {
      scroll: {},
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollInit()
    }, 20);
  },
  methods: {
    scrollInit() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.bs.probeType,
        pullUpLoad: this.bs.pullUpLoad
      })
      this.scroll.on("scroll",(position) => {
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',() => {
        console.log("加载更多")
        this.$emit('pullingUpClick')
      })
      this.$bus.$on('scrollRefresh',() => {
        this.scroll.refresh()
        this.finishPulUp()
      })
    },
    finishPulUp() {
      this.scroll.finishPullUp()
    },
    scrollTo(y,timer=1000) {
      this.scroll.scrollTo(0,y,timer)
    }
  }
}
</script>

<style>
</style>
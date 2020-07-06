<template>
  <div ref="wrapper">
    <div>
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
          pullUpLoad: false,
        }
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      scroll: {},
     
    }
  },
  mounted() {
    // setTimeout(() => {
      this.$nextTick(() => {
        this.scrollInit()
      })
  },
  methods: {
    scrollInit() {
      if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper,{
          click: true,
          probeType: this.bs.probeType,
          pullUpLoad: this.bs.pullUpLoad
        })
        this.scroll.on("scroll",(position) => {
          this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUpClick')
        })
        this.$bus.$on('scrollRefresh',() => {
          this.refresh()
          this.finishPulUp()
        })
    },
    finishPulUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    scrollTo(y,timer=1000) {
      this.scroll.scrollTo(0,y,timer)
    },
    refresh() {
       this.scroll && this.scroll.refresh && this.scroll.refresh()
    }
  },
  watch: {
    data() {
      setTimeout(this.refresh, 20)
    }
  }
}
</script>

<style>
</style>
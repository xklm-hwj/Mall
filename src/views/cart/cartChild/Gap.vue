<template>
  <div class="gap">
    <div class="title">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.gap {
  text-align: center;
  position: relative;
  .title {
    z-index: 2;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    padding:0 1em;
    background-color: #fff;
  }
  .title::before, .title::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 4px;
    height: 4px;
    display: inline-block;
    background-color: #000;
    transform: rotate(45deg);
  }
  .title::before {
    left: 0;
  }
  .title::after {
    right: 0;
  }
}
.gap::after {
  z-index: 1;
  content: '';
  width: 96%;
  height: 1px;
  background: #ccc;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
}
</style>
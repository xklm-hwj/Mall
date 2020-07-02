<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import url('./assets/iconfont/iconfont.css');
  *{
    margin: 0;
    padding: 0;
  }
  input {
    outline: none;
  }
  body,a {
    font: 12px Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
    color: #666;
  }
</style>

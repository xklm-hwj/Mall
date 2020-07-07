<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
  @import url('./assets/iconfont/iconfont.css');
  *{
    margin: 0;
    padding: 0;
  }
  input {
    outline: none;
    border: 0;
  }
  body,a {
    font: 12px Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
    color: #666;
  }
  table,tr,td {
    border: 0;
  }
  input::-webkit-input-placeholder {
    font-size: 16px !important;
  }
  input::-moz-input-placeholder {
    font-size: 16px !important;
  }
  input::-ms-input-placeholder {
    font-size: 16px !important;
  }
  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px #fff inset;
    -webkit-text-fill-color: #333;
    font-size: 16px !important;
  }
  input:-moz-autofill {
    box-shadow: 0 0 0 1000px #fff inset;
    -webkit-text-fill-color: #333;
    font-size: 16px !important;
  }
  input:-ms-autofill {
    box-shadow: 0 0 0 1000px #fff inset;
    -webkit-text-fill-color: #333;
    font-size: 16px ;
  }
</style>

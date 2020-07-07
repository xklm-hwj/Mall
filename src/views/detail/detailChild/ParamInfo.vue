<template>
  <div v-if="Object.keys(paramInfo).length>0" class="param">
    <table class="table">
      <tr v-for="(size,index) of paramInfo.sizes[0]" :key="index" class="sizes">
        <td v-for="(item,a_index) of size" :key="a_index" class="size" :class="{'th':a_index==0}">{{item}}</td>
      </tr>
    </table>
    <table class="table">
      <tr v-for="(item,index) of paramInfo.infos" :key="index" class="info">
        <th class="td th" >{{item.key}}</th>
        <td class="td" >
          <span class="td-content">
            {{item.value}}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .param{
    padding-bottom: 40px;
    border-bottom: 3px solid #f7f7f7;
  }
  .table {
    width: 100%;
    padding:0 10px;
    font-size: 12px;
    .sizes {
      display: flex;
    }
    .size {
      flex: 1;
      border-bottom: 2px solid #f1f1f1;
      line-height: 35px;
      text-align: center;
    }
    .info {
      display: flex;
    }
    .td {
      flex: 3;
      border-bottom: 2px solid #f1f1f1;
      color: red;
      line-height:35px;
      border-spacing:0;
      .td-content {
        line-height: 20px;
        display: inline-block;
      }
    }
    .th {
      flex: 1.5;
      text-align: left;
      text-indent: 1em;
      font-weight: 700;
      color: #666;
    }
  }
</style>
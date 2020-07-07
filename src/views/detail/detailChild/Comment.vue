<template>
  <div class="comment">
    <div v-for="(item,index) of commentInfo" :key="index">
      <div class="title" v-if="item">
        <div>
          用户评论
        </div>
        <div class="">更多
          <i class="icon"></i>
        </div>
      </div>
      <div class="title" v-else>暂无评论</div>
      <div class="user">
        <div class="avatar">
          <img :src="item.user.avatar">
          <span class="name">{{item.user.uname}}</span>
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="detail">
          <span class="create">{{item.created | format}}</span>
          <span>{{item.style}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from 'utils/formatData'
export default {
  name: 'Comment',
  props: {
    commentInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    format(value) {
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #f7f7f7;
    text-align: left;
    .title {
      font-size: 15px;
      position: relative;
      height: 50px;
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      border-bottom: 2px solid #f7f7f7;
      .icon {
        content: '';
        display: inline-block;
        width: 9px;
        height: 9px;
        border-top: 1px solid #666;
        border-right: 1px solid #666;
        transform: rotate(45deg);
      }
    }
    .avatar {
      text-align: left;
      line-height: 40px;
      height: 40px;
      padding: 10px 0;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
     
    .content {
      padding: 20px 10px;
      text-align: left;
    }
    .detail {
      text-align: left;
      .create {
        margin-right: 10px;
      }
    }
  }
</style>
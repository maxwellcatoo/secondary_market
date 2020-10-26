<template>
  <div id="GoodsInfoComment">
    <div class="box">
      <div><img :src="comment.head_imgsrc?baseHost+comment.head_imgsrc:item.imgsrc" alt=""></div>
      <div class="box_left">
        <div>{{comment.username}}</div>
        <div>{{comment.date}}</div>
      </div>
      <div class="box_right">
        <comment-star :stars="Number(comment.score)"></comment-star>
        <div>{{comment.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentStar from './CommentStar'
import {myMixin} from '../../common/mixin'

export default {
  name: 'GoodsInfoComment',
  components: {
    CommentStar
  },
  mixins: [myMixin],
  data() {
    return {
      item: {
        imgsrc: 'https://api.youzixy.com/public/uploads/avatar/default8.png'  //用户头像不存在时，使用该默认连接头像
      }
    }
  },
  mounted() {
    this.comment.date = this.comment.date.toString().slice(0,10)
  },
  props: {
    comment: Object
  }
}
</script>

<style scoped>
  .box {
    height: 60px;
    width: 100%;
    overflow: hidden;
    /* border: 1px solid red; */
  }
  .box img {
    height: 60px;
    border-radius: 50%;
  }
  .box>div {
    float: left;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
  }
  .box_left>div:first-child {
    font-weight: bold;
  }
  .box_left>div:last-child {
    font-size: 12px;
    color: #666;
  }
  .box_right>div:last-child {
    color: #333;
  }
  .star {
    display: inline-block;
  }
</style>

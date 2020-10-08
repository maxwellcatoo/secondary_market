<template>
  <div id="GoodsInfoComment">
    <div class="box">
      <div><img :src="comment.head_imgsrc?comment.head_imgsrc:item.imgsrc" alt=""></div>
      <div class="box_left">
        <div>{{comment.username}}</div>
        <div>{{comment.date}}</div>
      </div>
      <div class="box_right">
        <div>{{comment.score}}星</div>
        <div>{{comment.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfoComment',
  data() {
    return {
      item: {
        imgsrc: 'https://api.youzixy.com/public/uploads/avatar/default8.png'
      }
    }
  },
  mounted() {
    // console.log(this.comment)
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
</style>

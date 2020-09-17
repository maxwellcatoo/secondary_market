<template>
  <div id="discussList">
    <discuss-item v-for="(item,index) in discussInfo" :key="index">
      <a href="#">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
        <div class="info">
          <div>{{item.author}}</div>
          <div>{{item.update}}</div>
          <div>{{item.watcher}}</div>
        </div>
      </a>
    </discuss-item>
    <pages></pages>
  </div>
</template>

<script>
import DiscussItem from './DiscussItem'
import Pages from '../../../components/common/page/Page'

export default {
  name: 'DiscussList',
  components: {
    DiscussItem,Pages
  },
  data() {
    return {
      discussInfo: [{title:'火星撞地球',content:'听说火星就要撞地球了，小编第一次听说这个消息也是十分惊讶呢。这个消息到底是从哪里传播出来的？是否有一定的科学依据呢？这个消息到底是不是谣言呢？对于以上问题小编也是十分的困惑呢，不过，小编可以肯定的一点是，如果火星真的撞上地球的话，那么一定是会发生非常可怕的事情呢！好啦，以上就是小编关于火星撞地球消息的所有看法了，观众朋友们怎么看待这个消息呢？欢迎大家在评论区留言讨论呢',author:'hinata',update:'2020-12-22',watcher:'1001',response:'10'},{title:'火星撞地球',content:'听说火星就要撞地球了，小编第一次听说这个消息也是十分惊讶呢。这个消息到底是从哪里传播出来的？是否有一定的科学依据呢？这个消息到底是不是谣言呢？对于以上问题小编也是十分的困惑呢，不过，小编可以肯定的一点是，如果火星真的撞上地球的话，那么一定是会发生非常可怕的事情呢！好啦，以上就是小编关于火星撞地球消息的所有看法了，观众朋友们怎么看待这个消息呢？欢迎大家在评论区留言讨论呢',author:'hinata',update:'2020-12-22',watcher:'1001',response:'10'},{title:'火星撞地球',content:'听说火星就要撞地球了，小编第一次听说这个消息也是十分惊讶呢。这个消息到底是从哪里传播出来的？是否有一定的科学依据呢？这个消息到底是不是谣言呢？对于以上问题小编也是十分的困惑呢，不过，小编可以肯定的一点是，如果火星真的撞上地球的话，那么一定是会发生非常可怕的事情呢！好啦，以上就是小编关于火星撞地球消息的所有看法了，观众朋友们怎么看待这个消息呢？欢迎大家在评论区留言讨论呢',author:'hinata',update:'2020-12-22',watcher:'1001',response:'10'},{title:'火星撞地球',content:'听说火星就要撞地球了，小编第一次听说这个消息也是十分惊讶呢。这个消息到底是从哪里传播出来的？是否有一定的科学依据呢？这个消息到底是不是谣言呢？对于以上问题小编也是十分的困惑呢，不过，小编可以肯定的一点是，如果火星真的撞上地球的话，那么一定是会发生非常可怕的事情呢！好啦，以上就是小编关于火星撞地球消息的所有看法了，观众朋友们怎么看待这个消息呢？欢迎大家在评论区留言讨论呢',author:'hinata',update:'2020-12-22',watcher:'1001',response:'10'},{title:'火星撞地球',content:'听说火星就要撞地球了，小编第一次听说这个消息也是十分惊讶呢。这个消息到底是从哪里传播出来的？是否有一定的科学依据呢？这个消息到底是不是谣言呢？对于以上问题小编也是十分的困惑呢，不过，小编可以肯定的一点是，如果火星真的撞上地球的话，那么一定是会发生非常可怕的事情呢！好啦，以上就是小编关于火星撞地球消息的所有看法了，观众朋友们怎么看待这个消息呢？欢迎大家在评论区留言讨论呢',author:'hinata',update:'2020-12-22',watcher:'1001',response:'10'},]
    }
  }
}
</script>

<style scoped>
  #discussList {
    width: 50vw;
    margin: 50px auto;
  }
  #discussItem {
    padding: 0 10px 0 15px;
    width: calc(50vw - 25px);
    /* border: 1px solid red; */
    border-radius: 10px;
    background-color: #fff;
    margin-top: 30px;
  }
  .title {
    color: #005097;
    font-size: 14px;
  }
  .content {
    color: #666666;
    font-size: 13px;
  }
  .info {
    color: #999;
    font-size: 12px;
  }
  .info>div {
    text-decoration: none;
    display: inline-block;
    margin-right: 20px;
  }
  .title,.content,.info {
    display: inline-block;
    margin-top: 10px;
  }
</style>

<template>
  <div id="goodsInfo">
    <div class="info">
      <div class="info_img"><img src="https://api.youzixy.com/public/uploads/attach/2019/12/13/5df35b428d1e1.jpg" alt=""></div>
      <div class="info_info">
        <div class="info_user"><img :src="iteminfo.headImg" alt="">{{goodsInfo.username}}</div>
        <div>{{goodsInfo.title}}</div>
        <div>{{goodsInfo.describes}}</div>
        <div><span>图标</span><span>{{goodsInfo.price}}元</span><span>原价{{goodsInfo.old_price}}元</span></div>
        <div><span>图标</span><span>{{goodsInfo.school}}</span></div>
        <div><span>图标</span><span>{{goodsInfo.update}}</span></div>
        <div><span>图标</span><span>微信:{{goodsInfo.wechart}} </span><span> QQ:{{goodsInfo.qq}}</span></div>
      </div>
    </div>
    <div class="comment">
      <div class="comment_title">
        <div>商品评价</div>
        <div @click="comment">发表评论</div>
      </div>
      <div class="comment_class">
        <div :class="{active:currentIndex===0}" style="color:blue">全部评论</div>
        <div :class="{active:currentIndex===1}" style="color:green">好评</div>
        <div :class="{active:currentIndex===2}" style="color:orange">中评</div>
        <div :class="{active:currentIndex===3}" style="color:red">差评</div>
      </div>

      <goods-info-comment id="comment" :comment=item v-for="(item,index) in goodsComment" :key="index"></goods-info-comment>
      
      <page class="page"></page>
    </div>
  </div>
</template>

<script>
import {getGoodsInfo} from '../../network/goodsInfo'
import Page from '../../components/common/page/Page'
import GoodsInfoComment from './GoodsInfoComment'

export default {
  name: 'GoodsInfo',
  components: {
    Page,GoodsInfoComment
  },
  data() {
    return {
      iid: '', //商品id
      iteminfo: {
        headImg:'https://api.youzixy.com/public/uploads/avatar/default8.png',
      },
      currentIndex: 0,
      goodsInfo: {},  //存储商品详情信息
      goodsComment: [] //商品评论
    }
  },
  created() {
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    this.getInfo(this.iid)
  },
  mounted() {
    this.commentClass()
  },
  methods: {
    getInfo(iid) {
      getGoodsInfo(iid).then(res => {
        this.goodsInfo = res.data.result[0]
        this.goodsInfo.update = this.goodsInfo.update?this.goodsInfo.update.toString().slice(0,10):''
        this.goodsComment = res.data.result2
        // console.log(this.goodsInfo)
      })
    },
    commentClass() {
      let classEles = document.querySelectorAll('.comment_class>div')
      Array.from(classEles).forEach((item,index) => {
        item.onclick = () => {
          this.currentIndex = index
        }
      })
    },
    comment() {
      console.log('发表评论')
    }
  },
  props: {
    data: Number
  }
}
</script>

<style scoped>
/* 商品信息 */
  .info {
    position: relative;
    width: 70%;
    margin: 30px auto;
    background-color: white;
    box-shadow: 0 0 10px 3px rgba(49, 50, 51, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }
  /* 商品信息左侧图片 */
  .info_img {
    margin: 30px;
    width: 30%;
    float: left;
  }
  .info_img>img {
    width: 100%;
  }
/* 信息块右侧具体信息 */
  .info_info {
    float: left;
    margin: 30px;
    width: 50%;
    display: flex;
    flex-direction: column;
    /* background-color: #ccc; */
  }
  /* 每一行一个div，宽度加满 */
  .info_info>div {
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 17px;
  }
  .info_info>div:first-child {
    margin-bottom: 10px;
  }
  /* 每一行的元素彼此留下20px的间隔 */
  .info_info>div>span {
    margin-right: 20px;
  }
  /* 带用户头像的第一行 */
  .info_user>img {
    height: 100%;
    border-radius: 50%;
    vertical-align:middle;
    margin-right: 20px;
  }
/* 用户评论信息块 */
  .comment {
    width: 70%;
    margin: 30px auto 0;
    background-color: white;
    box-shadow: 0 0 10px 3px rgba(49, 50, 51, 0.1);
    border-radius: 10px;
    /* border: 1px solid red; */
    /* height: 3000px; */
  }
  /* 评论题头 */
  .comment_title {
    position: relative;
    height: 50px;
    width: 100%;
    line-height: 50px;
    border-bottom: 1px solid rgba(49, 50, 51, 0.1);
  }
  .comment_title>div:first-child {
    margin-left: 30px;
    font-weight: bold;
  }
  .comment_title>div:last-child {
    position: absolute;
    top: 13px;
    right: 20px;
    height: 25px;
    line-height: 25px;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    padding: 0 10px;
    background-color: royalblue;
  }
  .comment_class {
    height: 50px;
    line-height: 50px;
    width: 100%;
    margin-bottom: 10px;
  }
  .comment_class>div {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    /* border: 1px solid red; */
  }
  .active {
    background-color: royalblue;
    color: white !important;
  }
  #comment {
    border-bottom: 1px solid rgba(50, 50, 50, 0.1);
    margin: 0;
    padding: 20px 0;
    width: 100%;
  }
  .page {
    margin-top: 30px !important;
  }
</style>

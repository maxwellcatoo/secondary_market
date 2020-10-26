<template>
  <div id="goodsInfo">
    <div class="goodsInfo">
      <div class="info">
        <div class="info_img"><img :src="goodsInfo.imgurl1?baseHost+goodsInfo.imgurl1:baseHost+iteminfo.defaultImg" alt=""></div>
        <div class="info_info">
          <div class="info_user"><img :src="goodsInfo.head_imgsrc?baseHost+goodsInfo.head_imgsrc:iteminfo.headImg" alt="">{{goodsInfo.username}}</div>
          <div>{{goodsInfo.title}}</div>
          <div>{{goodsInfo.describes}}</div>
          <div><span>图标</span><span>{{goodsInfo.price}}元</span><span>原价{{goodsInfo.old_price}}元</span></div>
          <div><span>图标</span><span>{{goodsInfo.school}}</span></div>
          <div><span>图标</span><span>{{goodsInfo.date}}</span></div>
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

        <goods-info-comment
        v-show="item.score>showStarStart&&item.score<showStartEnd"
        id="comment" :comment=item 
        v-for="(item,index) in goodsComment" :key="index">
        </goods-info-comment>
        
        <page class="page"></page>
      </div>
    
    </div>
    <div v-show="showAddComment" class="add_comment">
      <div><span>评分:</span><svg @click="starScore(index)" v-for="(item,index) in 5" :key="index" t="1602214292205" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13783" width="20" height="20"><path d="M514.27 83.74c-7.8 0-23.4 6.01-43.79 44.75-48.97 83.5-126.33 219.87-126.33 219.87s-141.48 26.28-232.72 42.77c-44.75 7.03-59.33 45.14-36.63 71.93 63.93 73.78 177.74 195.64 177.74 195.64S234 792.58 223.58 883.94c-3.39 35.1 15.98 55.17 42.96 55.17 9.81-0.1 19.48-2.28 28.39-6.39l219.42-104.28c25.89 12.79 141.23 69.05 216.99 105.43a67.918 67.918 0 0 0 28.07 6.39c26.66 0 45.78-20.14 42.45-55.24-10.29-91.49-28.64-225.49-28.64-225.49s112.27-121.99 175.69-195.96c22.44-26.85 7.99-64.96-36.25-72.05-90.21-16.49-230.16-42.77-230.16-42.77s-76.72-136.5-124.86-220.12c-17.13-30.88-30.18-40.79-38.36-43.47-1.58-0.67-3.28-1-4.99-0.96l-0.02-0.46z" :fill="index<stars?'#f4ea2a':'#2c2c2c'" p-id="13784"></path></svg></div>
      <div><span>评价:</span><textarea placeholder="请输入您对商品的评价" name="comment" type='text'></textarea></div>
      <div><input @click="submit" type="button" value="提交"></div>
      <div class="quit" @click="quitComment">x</div>
    </div>
  </div>
</template>

<script>
import {getGoodsInfo,onloadComment} from '../../network/goodsInfo'
import {watchTimes} from '../../network/watchTimes'
import {myMixin} from '../../common/mixin'

import Page from '../../components/common/page/Page'
import GoodsInfoComment from './GoodsInfoComment'

export default {
  name: 'GoodsInfo',
  components: {
    Page,GoodsInfoComment
  },
  mixins: [myMixin],
  data() {
    return {
      iid: '', //商品id
      iteminfo: {
        headImg:'https://api.youzixy.com/public/uploads/avatar/default8.png',
        defaultImg: 'images/default.jpg'
      },
      currentIndex: 0,
      goodsInfo: {},  //存储商品详情信息
      goodsComment: [], //商品评论
      showStarStart: 0,
      showStartEnd: 6,
      showAddComment: false,
      stars: 0
    }
  },
  created() {
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    this.getInfo(this.iid)
  },
  mounted() {
    this.commentClass()
    watchTimes(this.iid).then(() => {
      // console.log('')
    })  //把商品id提交到后台就可以了，也不需要提交成功的返回值，所以.then是没必要的
  },
  methods: {
    getInfo(iid) {
      getGoodsInfo(iid).then(res => {
        // console.log(res.data)
        this.goodsInfo = res.data.result[0]
        this.goodsInfo.date = this.goodsInfo.date?this.goodsInfo.date.toString().slice(0,10):''
        this.goodsComment = res.data.result2.reverse()  //翻转一下数组，把最新的评论放到最上边
      })
    },
    commentClass() {
      let classEles = document.querySelectorAll('.comment_class>div')
      Array.from(classEles).forEach((item,index) => {
        item.onclick = () => {
          this.currentIndex = index
          if(index === 0){
            this.showStarStart = 0
            this.showStartEnd = 6
          }else if(index===1){
            this.showStarStart = 4
            this.showStartEnd = 6
          }else if(index===2){
            this.showStarStart = 2
            this.showStartEnd = 5
          }else if(index===3){
            this.showStarStart = 0
            this.showStartEnd = 3
          }
        }
      })
    },
    comment() {
      // console.log('发表评论')
      let goodsInfo = document.querySelector('.goodsInfo')

      this.showAddComment = true
      goodsInfo.style.opacity = '0.1'
    },
    quitComment() {
      let goodsInfo = document.querySelector('.goodsInfo')
      this.showAddComment = false
      goodsInfo.style.opacity = '1'
    },
    //点击显示星数
    starScore(index){
      this.stars = index + 1 
    },
    //上传评论数据到后台，且关闭评论弹窗
    submit() {
      let phone = localStorage.getItem('phone')
      let component = document.querySelector('.add_comment textarea').value
      if(this.stars === 0) {
        this.$toast.show('请为商品评星',1500)
      }else if(!component){
        this.$toast.show('请填写评论内容',1500)
      }else {
        onloadComment(this.iid,phone,this.stars,component).then(res => {  //重新加载评论
          if(res.data){
            this.$toast.show('评论成功',1500)
            //关闭评论弹窗
            let goodsInfo = document.querySelector('.goodsInfo')
            this.showAddComment = false
            goodsInfo.style.opacity = '1'
            location.reload() //评论成功后重新加载当前页面
          }else {
            this.$toast.show('评论失败',1500)
          }
      })

      }
      //发送数据到后台
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
    cursor: pointer;
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
  .add_comment {
    position: relative;
    height: 270px;
    width: 400px;
    border: 1px solid rgba(50, 50, 50, 0.1);
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-70%);
    background-color:	#BDB76B;
  }
  .add_comment>div {
    width: calc(100% - 20px);
    height: 50px;
    margin-top: 20px;
    margin-left: 20px;
    /* line-height: 50px; */
  }
  .add_comment>div>span {
    margin-right: 30px;
  }
  .add_comment>div:nth-of-type(2)>span {
    vertical-align: top;
  }
  .add_comment textarea {  
    text-indent: 5px;
    outline: 0;
    width: 75%;
    min-height: 60px;
    max-height: 100px;
    resize: vertical;
    overflow-y: hidden;
  }
  .add_comment textarea:hover {
    border-color: #66afe9;
    border-radius: 5px;
  }
  .add_comment textarea:focus {
    border-color: #66afe9;
    color: #666;
    outline: 0;
    text-indent: 5px;
    box-shadow: 0 0 2px 1px rgba(102, 175, 233, 0.6);
    border-radius: 5px;
  }
  .add_comment>div:nth-of-type(3) {
    position: absolute;
    bottom: 10px;
    /* left: 180px; */
    text-align: center;
  }
  .add_comment input {
    width: 50%;
    height: 30px;
  }
  .quit {
    margin-top: 0 !important;
    height: 20px !important;
    width: 20px !important;
    line-height: 20px;
    text-align: center;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  .quit:hover {
    background-color: red;
  }
</style>

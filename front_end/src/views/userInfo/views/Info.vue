<template>
  <div id="info">
    <form action="">
      <div class="head item"><div>头像</div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1666256797,972082711&fm=26&gp=0.jpg" alt=""></div>
      <div class="item"><div>昵称</div><input type="text"></div>
      <div class="item"><div>积分</div><input type="text"></div>
      <div class="item"><div>学校</div><input type="text"></div>
      <div class="item"><div>性别</div><input type="checkbox" value="男" name="男"><input type="checkbox" value="女"><input type="checkbox" value="保密"></div>
      <div class="item"><div>毕业年份</div><input type="text"></div>
      <div class="item textarea"><div>个性签名</div><textarea name="" id=""></textarea></div>
      <div class="item submit"><div></div><input type="submit" value="修改"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Info',
}
</script>

<style scoped>
  #info {
    width: 300px;
    height: 300px;
  }
  .item {
    width: 100%;
    /* height: 40px; */
    line-height: 40px;
    margin-top: 10px;
  }

  .head {
    height: 80px;
    margin-top: 20px;
  }
  .head>div {
    vertical-align: top;
  }
  .head>img {
    height: 70px;
    width: 70px;
  }

  .item div {
    display: inline-block;
  }
  .item>div {
    width: 100px;
    text-align: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .item>input[type=text] {
    height: 20px;
    width: 15%;
  }

  .textarea {
    padding: 0;
  }
  textarea {
    display: inline-block;
    resize: vertical;
    min-height: 60px;
    max-height: 120px;
    overflow-y: hidden;
    width: 30%;
  }
  .textarea>div {
    line-height: 20px;
    height: 20px;
    vertical-align: top;
  }

  .submit {
    margin-top: 0px;  
  }
</style>

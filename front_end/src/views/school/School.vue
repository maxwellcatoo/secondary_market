<template>
  <div id="school">
    <img class="schoolimg" src="../../assets/university.jpg" alt="">

    <div class="school-item">
      <form action="">
        <div class="school"><div>学校</div><input class="in" type="text" placeholder="填写完整学校名称"></div>
        <div class="username"><div>姓名</div><input class="in" type="text" placeholder="填写完整您的姓名"></div>
        <div class="qqnum"><div>QQ</div><input class="in" type="text" placeholder="联系方式至少填一项"></div>
        <div class="weichart"><div>微信</div><input class="in" type="text" placeholder="联系方式至少填一项"></div>
        <div class="phone"><div>手机</div><input class="in" type="text" placeholder="联系方式至少填一项"></div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'School'
}
</script>

<style scoped>
  .schoolimg {
    position: relative;
    left: 10vw;
    width: 40vw;
  }
  .school-item {
    position: absolute;
    top: 18vh;
    left: 58vw;
    width: 25vw;
    height: 20vh;
  }
  .school,.username,.qqnum,.weichart,.phone {
    width: 100%;
    height: 50px;
    line-height: 50px;
    /* border: 1px solid red; */
    font-size: 13px;
    margin-top: 20px;
  }
  .school>div,.username>div,.qqnum>div,.weichart>div,.phone>div {
    display: inline-block;
    width: 40px;
  }
  .in {
    width: 280px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #777;
    text-indent: 5px;
  }

  input:hover {
    border-color: #66afe9;
  }

  input:focus {
    border-color: #66afe9;
    color: #666;
    outline: 0;
    text-indent: 5px;
    box-shadow: 0 0 2px 1px rgba(102, 175, 233, 0.6);
  }
  input::selection {
    border-color: #66afe9;
    text-indent: 10px;
    color: #666;
    box-shadow: 0 0 2px 1px rgba(102, 175, 233, 0.6);
  }
  input::-moz-selection {
    border-color: #66afe9;
    color: #666;
    text-indent: 5px;
    /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0,0,8px rgba(102, 175, 233, 0.6); */
  }
  ::-webkit-input-placeholder {
    text-indent: 5px;
    font-size: 12px;
  }

</style> 

<template>
  <div id="classify">
    <classify-item class="classify-item" v-for="(item,index) in classifyData" :key="index">
      <span>{{ item.title }}&emsp;</span><span>&emsp;<svg t="1600230200678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1649" width="10" height="10"><path d="M385.536 102.4l398.848 364.544c12.288 10.752 19.456 26.624 19.456 43.008s-7.168 32.256-19.456 43.008l-398.848 364.544c-18.944 17.92-46.08 23.552-70.656 14.336s-40.96-31.232-43.52-57.344V145.408c2.048-26.112 18.944-48.128 43.52-57.344 24.064-9.216 51.712-3.584 70.656 14.336z" fill="#aaaaaa" p-id="1650"></path></svg></span> 
      <!-- <div id="item">{{item.title}}</div> -->
    </classify-item>
    <classify-box :classifyInfo=classifyData[classifyIndex] id="classifyBox" style="display:none"></classify-box>
  </div>
</template>

<script>
import ClassifyItem from './ClassifyItem'
import ClassifyBox from './ClassifyBox'

export default {
  name: 'Classify',
  components: {
    ClassifyItem,ClassifyBox
  },
  data() {
    return {
      classifyData: [
        {title:'数码产品',classifyid: '0',
        data:[
          {title:'手机',imgsrc:"shuma/phone.jpg",classifyid:'1'},
          {title:'平板',imgsrc:"shuma/ipad.jpg",classifyid:'2'},
          {title:'笔记本',imgsrc:"shuma/notebook.png",classifyid:'3'},
          {title:'台式机',imgsrc:"shuma/computer.jpg",classifyid:'4'},
          {title:'手表手环',imgsrc:"shuma/watch.jpg",classifyid:'5'},
          {title:'单反相机',imgsrc:"shuma/camera.jpg",classifyid:'6'},
          {title:'充电宝',imgsrc:"shuma/battery.jpg",classifyid:'7'},
          {title:'耳机',imgsrc:"shuma/headset.jpg",classifyid:'8'},
          {title:'手机配件',imgsrc:"shuma/mobileAcc.jpg",classifyid:'9'},
          {title:'电脑配件',imgsrc:"shuma/computerAcc.jpg",classifyid:'a'},
          {title:'路由器',imgsrc:"shuma/router.jpg",classifyid:'b'},
          {title:'其他',imgsrc:"shuma/others.png",classifyid:'c'}
          ]
          },
      
        {title:'书籍教材',classifyid: '1',
          data:[
            {title:'教科书',imgsrc:"book/teachbook.jpg",classifyid: '1'},
            {title:'文学',imgsrc:"book/literature.jpg",classifyid: '2'},
            {title:'小说',imgsrc:"book/novel.jpg",classifyid: '3'},
            {title:'电子书',imgsrc:"book/ebook.png",classifyid: '4'},
            {title:'教育考试',imgsrc:"book/test.jpg",classifyid: '5'},
            {title:'动漫',imgsrc:"book/comic.jpg",classifyid: '6'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '7'},
            ]},
        
        {title:'衣鞋帽伞',classifyid: '2',
          data:[
            {title:'裙子',imgsrc:"shoes/skirt.jpg",classifyid: '1'},
            {title:'裤子',imgsrc:"shoes/pants.jpg",classifyid: '2'},
            {title:'衣服',imgsrc:"shoes/clothes.jpg",classifyid: '3'},
            {title:'帽子',imgsrc:"shoes/hat.jpg",classifyid: '4'},
            {title:'鞋子',imgsrc:"shoes/shoes.jpg",classifyid: '5'},
            {title:'箱子',imgsrc:"shoes/box.jpg",classifyid: '6'},
            {title:'包包',imgsrc:"shoes/package.jpg",classifyid: '7'},
            {title:'雨伞',imgsrc:"shoes/umbrella.jpg",classifyid: '8'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '9'},
            ]},
        
        {title:'代步工具',classifyid: '3',
          data:[
            {title:'自行车',imgsrc:"walking_tool/bicycle.jpg",classifyid: '1'},
            {title:'旱冰鞋',imgsrc:"walking_tool/skates.jpg",classifyid: '2'},
            {title:'平衡车',imgsrc:"walking_tool/balance_car.jpg",classifyid: '3'},
            {title:'滑板',imgsrc:"walking_tool/skate.jpg",classifyid: '4'},
            {title:'摩托车',imgsrc:"walking_tool/motorcycle.jpg",classifyid: '5'},
            {title:'电动车',imgsrc:"walking_tool/electric_vehicle.jpg",classifyid: '6'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '1'},
            ]},
        
        {title:'体育健身',classifyid: '4',
          data:[
            {title:'球类',imgsrc:"sports/ball.jpg",classifyid: '1'},
            {title:'球拍',imgsrc:"sports/racket.jpg",classifyid: '2'},
            {title:'运动鞋',imgsrc:"sports/sports_shoes.jpg",classifyid: '3'},
            {title:'运动装备',imgsrc:"sports/sports_equipment.jpg",classifyid: '4'},
            {title:'健身器材',imgsrc:"sports/body_building.jpg",classifyid: '5'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '6'},
            ]},
        
        {title:'家用电器',classifyid: '5',
          data:[
            {title:'电磁炉',imgsrc:"electric_appliance/electromagnetic_furnace.jpg",classifyid: '1'},
            {title:'洗衣机',imgsrc:"electric_appliance/washing_machine.jpg",classifyid: '2'},
            {title:'冰箱',imgsrc:"electric_appliance/icebox.jpg",classifyid: '3'},
            {title:'风扇',imgsrc:"electric_appliance/fan.jpg",classifyid: '4'},
            {title:'电饭煲',imgsrc:"electric_appliance/race_cooker.jpg",classifyid: '5'},
            {title:'豆浆机',imgsrc:"electric_appliance/milk_machine.jpg",classifyid: '6'},
            {title:'电吹风',imgsrc:"electric_appliance/hair_direr.jpg",classifyid: '7'},
            {title:'音响',imgsrc:"electric_appliance/sound.jpg",classifyid: '8'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '1'},
            
            ]},
        
        {title:'日常用品',classifyid: '6',
          data:[
            {title:'化妆护肤',imgsrc:"life_user/cosmetics.jpg",classifyid: '1'},
            {title:'小工具',imgsrc:"life_user/small_tools.jpg",classifyid: '2'},
            {title:'学习用品',imgsrc:"life_user/study.jpg",classifyid: '3'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '4'},
            ]},
        
        {title:'虚拟产品',classifyid: '7',
          data:[
            {title:'游戏周边',imgsrc:"fictitious/game_arounds.jpg",classifyid: '1'},
            {title:'充值卡',imgsrc:"fictitious/card.jpg",classifyid: '2'},
            {title:'各类账号',imgsrc:"fictitious/username.jpg",classifyid: '3'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '4'},
            ]},
        
        {title:'手工设计',classifyid: '8',
          data:[
            {title:'书法',imgsrc:"manual/calligraphy.jpg",classifyid: '1'},
            {title:'绘画',imgsrc:"manual/painting.jpg",classifyid: '2'},
            {title:'工艺品',imgsrc:"manual/atrs_and_crfts.jpg",classifyid: '3'},
            {title:'服装设计',imgsrc:"manual/clothing_design.jpg",classifyid: '4'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: '5'},
            ]},
        
        {title:'乐器',classifyid: '9',
          data:[
            {title:'吉他',imgsrc:"musical_instruments/guitor.jpg",classifyid: '1'},
            {title:'钢琴',imgsrc:"musical_instruments/piano.jpg",classifyid: '2'},
            {title:'尤克里里',imgsrc:"musical_instruments/eurico.jpg",classifyid: '3'},
            {title:'民族管弦',imgsrc:"musical_instruments/erhu.jpg",classifyid: '4'},
            {title:'西洋管弦',imgsrc:"musical_instruments/west_erhu.jpg",classifyid: '5'},
            {title:'打击乐器',imgsrc:"musical_instruments/drum_kit.jpg",classifyid: '6'},
            {title:'乐器配件',imgsrc:"musical_instruments/musical_acc.jpg",classifyid: '7'},
            {title:'电脑音乐',imgsrc:"musical_instruments/computer_music.jpg",classifyid: '8'},
            {title:'口琴/竖笛',imgsrc:"musical_instruments/harmonica.jpg",classifyid: '9'},
            {title:'电子琴',imgsrc:"musical_instruments/electronic_organ.jpg",classifyid: 'a'},
            {title:'其他',imgsrc:"shuma/others.png",classifyid: 'b'},
            ]},
        
        {title:'其他',classifyid: 'a',
          data:[{title:'其他',imgsrc:"shuma/others.png",classifyid: '1'},
            ]
        }
      ],
      classifyIndex: 0,
    }
  },
  mounted() {
    this.classifyItemHover()
    // console.log(this.data)
  },
  methods: {
    classifyItemHover() {
      let itemEl = document.getElementsByClassName('classify-item')
      let classifyBox = document.getElementById('classifyBox')

      Array.from(itemEl).forEach((item,index) => {
        item.onmouseover = () => {
          this.classifyIndex = index
          classifyBox.style.display = 'block'
        }
      });
      classifyBox.onmouseover = () => {
        classifyBox.style.display = 'block'
      }

      Array.from(itemEl).forEach((item) => {
        item.onmouseleave = () => {
          classifyBox.style.display = 'none'
        }
      });
      classifyBox.onmouseleave = () => {
          classifyBox.style.display = 'none'
      }
    }
  },
  props: {
    data: Object
  }
}
</script>

<style scoped>
  #classify {
    position: relative;
    padding: 10px 0;
    text-align: center;
    width: calc(0.15 * 70vw);
    height: calc(100% - 20px);
    float: left;
    background-color: #2b333b;
    color: #aaaaaa;
    cursor: pointer;
    border-radius: 10px 0 0 10px;
    font-size: 13px;
  }
  /* #classify::-webkit-scrollbar {
    display: none;
  } */
  .classify-item>div {
    height: 100%;
    margin: 0;
  }
  .classify-item {
    /* vertical-align: text-bottom; */
    height: 9%;
    line-height: calc((0.85 * 70vw / 1020 * 360 + 5vw) * 0.09);
    /* line-height: 300%; */
  }
  .classify-item:hover {
    background-color: #6b7176;
  }
</style>

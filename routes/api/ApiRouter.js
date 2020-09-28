const express = require('express');
const router = express.Router();
const multer = require('multer')
const fs = require('fs')

const onload = multer({dest: './public/releaseGoods/'})

const sqlQuery = require('../../public/module/lcMysql')

//加载首页时使用axios请求首页的商品数据并在首页进行渲染
router.get('/homepage',async(req,res) => {
  let typeID = req.query.classid
  let sqlStr = ''
  // console.log(typeID)
  if(typeID) {
    sqlStr = "select * from goods where classify_id = ?"
  }else {
    sqlStr = "select * from goods"
  }
  let result = await sqlQuery(sqlStr,[typeID])
  // console.log('---',result)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(result)
})

router.get('/purchase',async(req,res) => {
  //因为release是mysql中的关键字，所以要为release加上引号
  let sqlStr = "select * from release_info"
  let result = await sqlQuery(sqlStr)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(result)
})
//提交商品提交到这里
router.post('/releasebuy',onload.single('file'),async(req,res) => {
  let path = ''
  // console.log(req.file.path)
  if(req.file){
    path = req.file.path
    fs.renameSync(path,path+req.file.originalname)
    path = (path + req.file.originalname).slice(7,)
    console.log(path)
  }
  let user_id = 5
  let describes = req.body.easyInfo
  let title = req.body.title
  // let price = req.body.price
  let wechart = req.body.wechart
  let qq = req.body.qq
  let phone = req.body.phone

  let sqlStr = 'insert into release_info (imgsrc,user_id,describes,title,phone,qq,wechart) values (?,?,?,?,?,?,?)'
  await sqlQuery(sqlStr,[path,user_id,describes,title,phone,qq,wechart])
  res.render('jump.ejs',{

  })
})

module.exports = router

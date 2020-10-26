const express = require('express');
const router = express.Router();
const multer = require('multer')
const fs = require('fs')

const onload = multer({dest: './public/releaseBuy/'})
const goolsOnload = multer({dest: './public/releaseGoods'})

const sqlQuery = require('../../public/module/lcMysql')

//加载首页时使用axios请求首页的商品数据并在首页进行渲染
router.get('/homepage',async(req,res) => {
  // let typeID = req.query.classid
  let sqlStr = ''
  // console.log(typeID)
  // if(typeID) {
  //   sqlStr = "select * from goods where classify_id = ?"
  // }else {
    sqlStr = "select * from goods"
  // }
  let result = await sqlQuery(sqlStr)
  // console.log('---',result)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(result)
})

//加载求购信息页时，从数据库获取数据
router.get('/purchase',async(req,res) => {
  //因为release是mysql中的关键字，所以要为release加上引号
  let sqlStr = "select * from release_info"
  let result = await sqlQuery(sqlStr)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(result)
})

//用户登录
router.get('/login',async(req,res) => {
  let phone = req.query.phone
  let sql = 'select * from user where phone = ?'
  let result = await sqlQuery(sql,[phone])

  res.setHeader("Access-Control-Allow-Origin", "*")
  // console.log(result[0])
  res.send(result[0])
})


//提交商品求购信息提交到这里
router.post('/release_buy',onload.single('file'),async(req,res) => {
  let path = ''
  // console.log(req.file.path)
  if(req.file){
    path = req.file.path
    fs.renameSync(path,path+req.file.originalname)
    path = (path + req.file.originalname).slice(7,)   //截取第七位往后的字符
    console.log(path)
  }
  // let user_id = 5
  let describes = req.body.easyInfo
  let title = req.body.title
  // let price = req.body.price
  let wechart = req.body.wechart
  let qq = req.body.qq
  let phone = req.body.phone

  let user_phone = req.body.user_phone
  let sqlStr0 = 'select user_id from user where phone=?'
  let user_id = (await sqlQuery(sqlStr0,[user_phone]))[0].user_id

  let sqlStr = 'insert into release_info (imgsrc,user_id,describes,title,phone,qq,wechart) values (?,?,?,?,?,?,?)'
  await sqlQuery(sqlStr,[path,user_id,describes,title,phone,qq,wechart])
  res.render('jump.ejs',{

  })
})

//发布商品
router.post('/release_goods',goolsOnload.single('file'),async(req,res) => {
  let path = ''
  // console.log(req.file.path)
  if(req.file){
    path = req.file.path
    fs.renameSync(path,path+req.file.originalname)
    path = (path + req.file.originalname).slice(7,)  //截取第七位往后的字符
    console.log(path)
  }
  // let user_id = 5 //先统一赋值为5
  let describes = req.body.easyInfo
  let title = req.body.title
  let price = req.body.price
  let oldprice = req.body.oldprice
  // let classify = req.body.classify
  let classify = '13'
  let emailPrice = req.body.emailPrice
  let wechart = req.body.wechart
  let qq = req.body.qq
  let phone = req.body.phone
  let user_phone = req.body.user_phone
  let sqlStr0 = 'select user_id from user where phone=?'
  let user_id = (await sqlQuery(sqlStr0,[user_phone]))[0].user_id
  // console.log(user_id)

  let sqlStr = 'insert into goods (imgurl1,user_id,title,describes,price,old_price,classify_id,postage,phone,qq,wechart,date) values (?,?,?,?,?,?,?,?,?,?,?,now())'
  await sqlQuery(sqlStr,[path,user_id,title,describes,price,oldprice,classify,emailPrice,phone,qq,wechart])
  res.render('jump.ejs',{

  })
})
//商品详情页获取商品信息
router.get('/good_info',async (req,res) => {
  let goodsid = req.query.goodsid
  // let sql = 'select * from goods where goods_id = ?'
  let sql = 'select * from goods g inner join user u on g.goods_id=? and g.user_id = u.user_id'
  let result = await sqlQuery(sql,[goodsid])
  let sql2 = 'select * from goods_comment gc inner join user u on gc.goods_id=? and gc.user_id = u.user_id'
  let result2 = await sqlQuery(sql2,[goodsid])
  // console.log(result2)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send({result,result2})
})

//商品评论提交
router.get('/upload_comment',async (req,res) => {
  let goodsid = req.query.goodsid //商品id
  let phone = req.query.phone  //用户
  let stars = req.query.stars  //评价星数
  let component = req.query.component  //评价内容
  let sql = 'select user_id from user where phone = ? '
  let userid = (await sqlQuery(sql,[phone]))[0].user_id  //首先通过用户phone查询出用户id
  let sql2 = 'insert into goods_comment (goods_id,user_id,date,content,score) values (?,?,now(),?,?)'
  let result = await sqlQuery(sql2,[goodsid,userid,component,stars])  //将内容存储到数据库中

  
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(result)
})

//商品浏览量变更
router.get('/watch_times',async(req,res) => {
  let goods_id = req.query.goods_id
  let sql = 'update goods set watch_times=watch_times+1 where goods_id = ?'
  await sqlQuery(sql,[goods_id])
  
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(true)
})

module.exports = router

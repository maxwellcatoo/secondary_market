var express = require('express');
var router = express.Router();

const sqlQuery = require('../../public/module/lcMysql')

router.get('/homepage',async(req,res) => {
  let sqlStr = "select * from goods"
  let result = await sqlQuery(sqlStr)
  // console.log('---',result)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(result)
})

module.exports = router

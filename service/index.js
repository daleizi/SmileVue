const Koa = require('koa')
const app = new Koa()
const { connect , initSchemas } = require('./database/init.js')
const mongoose = require('mongoose')

//立即执行函数
;(async ()=>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName:'jspang',password:'123456'})
    oneUser.save().then(()=>{
        console.log('插入成功')
    })
    let user = await User.findOne({})
    console.log('-------------------------')
    console.log(user)
})()

app.use(async(ctx)=>{
    ctx.body = '<h1>你好啊</h1>'
})

app.listen(3000,()=>{
    console.log('服务器连接成功')
})
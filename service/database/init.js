const mongoose = require('mongoose')
const db = "mongodb://localhost/simle-db"

exports.connect = ()=>{
    //连接数据库
    mongoose.connect(db)
    //增加数据库监听事件
    mongoose.connection.on('disconnected',()=>{
        console.log('*********数据库断开')
        //进行重连
        mongoose.connect(db)
    })

    //数据库出现错误的时候
    mongoose.connection.on('error',()=>{
        console.log('*********数据库错误')
        mongoose.connect(db)
    })

    //链接打开的时候
    mongoose.connection.once('open',()=>{
        console.log('数据库连接成功')
    })
}
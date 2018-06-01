const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ObjectId = Schema.Types.ObjectId

//创建UserSchema模型
const userSchema = new Schema({
    UserId:Object,
    userName:{unique:true,type:String},//不重复的用户名
    password:String,
    createAt:{type:Date,default:Date.now()},//创建时间
    lastLoginAt:{type:Date,default:Date.now()},//最后的登陆时间
})

//发布模型
mongoose.model('User',userSchema)
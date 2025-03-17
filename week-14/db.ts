import mongoose from "mongoose"
const Schema= mongoose.Schema
const objectId = mongoose.Schema.ObjectId

const User= new Schema({
    email: { type:String, unique:true },
    password:String,

})

const adminSchema = new Schema({
    email:{ type:String, unique:true },
    password:String
})

const userSchema = new Schema({
    email:{type:String, unique:true}
    ,password:String
})
const coursesSchema= new Schema({
    title:String,
    url:String,
    price:Number,

})
const purchasedSchema= new Schema({
    userId:objectId,
    courseId:objectId
})

export const userModel =mongoose.model("user",userSchema) 
export const adminModel =mongoose.model("admin",adminSchema) 
export const courseModel =mongoose.model("course",coursesSchema) 
export const purchaseModel =mongoose.model("purchased",purchasedSchema) 



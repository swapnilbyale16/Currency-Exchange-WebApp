let mongoose=require("mongoose")
let tsch=new mongoose.Schema({
    "_id":String,
    "task":String,
    "uid":String
})
let tm=mongoose.model("task",tsch)
module.exports=tm
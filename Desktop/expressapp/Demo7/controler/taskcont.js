let {v4}=require("uuid")
const tm = require("../model/taskmodel")
let addt=async(req,res)=>{
    try
    {
let data=new tm({...req.body,"_id":v4()})
await data.save()
res.send("task added")
    }
    catch(err)
    {
        res.send("error in adding task")
    }
}
let tdata=async(req,res)=>{
    try
    {
let data=await tm.find()
res.json(data)
    }
    catch(err)
    {
res.send("error in fetching data")
    }

}
let tpm=async(req,res)=>{
    try{
        let data=await tm.find({"uid":req.params.uid})
        res.json(data)

    }
    catch(err)
    {
        res.send("error in getting")
    }
}

module.exports={addt,tpm,tdata}
const um = require("../model/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let add=async(req,res)=>{
try{
    let hash=await bcrypt.hash(req.body.pwd,10)
let data=new um({...req.body,"pwd":hash})
await data.save()
res.send("reg done")
}
catch(err)
{
res.send("error in reg")
}
}

let login=async(req,res)=>{
    try
    {
let obj=await um.findById({"_id":req.body._id})
if(obj)
{
let f=await bcrypt.compare(req.body.pwd,obj.pwd)
if(f)
{
res.json({"token":jwt.sign({"_id":obj._id},"fsd1")})
}
else{
    res.send("check pwd")
}
}
else{
    res.send("check email")
}
    }
    catch(err)
    {
        res.send("error in login")
    }

}

let islogin=(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization,"fsd1")
        next()
    }
    catch(err)
    {
        res.send("plz login")
    }
}
let isadmin=async(req,res,next)=>{
    try{
        let obj=await um.findById({"_id":req.headers.uid})
        if(obj.role=='admin')
        {
            next()
        }
        else{
            res.send("you are not allowed to acess")
        }

    }
    catch(err)
    {
        res.send("you are not allowed to acess")
    }

}
module.exports={add,login,islogin,isadmin}
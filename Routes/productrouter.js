var express=require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var url="mongodb+srv://dinish:dinish@cluster0-llco8.mongodb.net/test?retryWrites=true&w=majority";

var product=require("../model/productmodel");

const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected..");
})
router.post('/add',function(req,res)
{
    var p1 = new product();
    // p1.pid = req.body.pid;
    // p1.pname = req.body.pname;
    // p1.price = req.body.price;
    p1.pid = 1;
    p1.pname = "ABC";
    p1.price = 1000;
    p1.save((err)=>{
        if (err) throw err;
        else
        {
            console.log("Product Added.");
            res.redirect("/");
        }
    })
})


router.post("/view",function(req,res){
    product.find({},function(err,result){
        if (err) throw err;
        else{
            console.log(result);
        }
    })
    
})

router.post("/update",function(req,res){
    product.updateMany({},{$set:{pname:"xyz"}},function(err,result){
        if (err) throw err;
        else{
            console.log(result);
        }
    })
    
})

router.post("/delete",function(req,res){
    product.deleteMany({},function(err,result){
        if (err) throw err;
        else{
            console.log(result);
        }
    })
    
})
module.exports=router;
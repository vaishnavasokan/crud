var mongoose=require("mongoose");
var schema=mongoose.Schema;//instance created for schema

var productschema=new schema(
    {
        pid:{type:String,required:true},
        pname:{type:String,required:true},
        price:{type:Number,required:true}
    }
)
var productmodel=mongoose.model("product",productschema,"product");
module.exports=productmodel;

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/api");
const schema=mongoose.Schema;
const newschema=new schema({
    name:String,
    age:Number
});
const mongomodel=mongoose.model("apis",newschema);
module.exports=mongomodel;
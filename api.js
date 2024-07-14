const express=require("express");
const app=express();
const mongomodel=require("./mongo.js");
const { json } = require("body-parser");




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","views");
app.get("/delete",(req, res)=>{
    res.render("api.ejs");
});

//post api to send data in database
/*app.post("/post",async (req,res)=>{
    const data=new mongomodel(req.body);
    await data.save()
   res.send(data);
});

// get api to find data
app.get("/read",async(req,res)=>{
    res.render("api.ejs")
  const fdata= await mongomodel.find();
  res.send(fdata);

});*/
app.delete("/delete/:id",(req,res)=>{
        
res.send(req.params.id)
});


app.listen(3003,()=>{
    console.log("run");
})



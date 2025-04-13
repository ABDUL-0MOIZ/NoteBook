const express = require('express');
const user=express.Router();
const path=require('path');
const fs=require('fs');

user.get('/',(req,res)=>{
   fs.readdir('./file',(err,files)=>{
   if (err) {
    res.send(err);
   }
   else{
    console.log(files);
    res.render('index',{files:files});
   
}});
  
  });
user.post('/note',(req,res)=>{
    fs.writeFile(`./file/${req.body.title}.txt`,req.body.content,(err)=>{
        if(err){
            
            res.send('error');
        }
        else{

            res.redirect('/');
        }
    }
)
});

user.get('/file/:file',(req,res)=>{
fs.readFile(`./file/${req.params.file}`,'utf-8',(err,data)=>{
    
    if(err){
       
        res.send('error');
    }
    else{
        res.render('file',{data:data,file:req.params.file}); 
    }
    
})
});

module.exports=user;
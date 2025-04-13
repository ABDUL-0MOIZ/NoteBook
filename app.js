const express=require('express');
const path=require('path');
const user=require('./modules/user')
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(user);

app.listen(3008,()=>{
    console.log('server is running on http://localhost:3008');
})
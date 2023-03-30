import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
    res.send(req.query) //joh query params me key and value dere post name woh return karta 
    console.log(req.query)//joh query params me key and value dere post name woh return karta terminal peh
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
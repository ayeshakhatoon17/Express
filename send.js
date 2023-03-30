import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
   res.status(200).send('hii')//res.send can send texts and html elements
})

app.listen(PORT,()=>{ 
    console.log('server listening at port',PORT)   
})
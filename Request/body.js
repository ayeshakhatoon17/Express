import express from 'express';

const PORT = 5000;
const app = express();

app.post('/',(req,res)=>{
    res.send(req.body)
    console.log(req.body)
})

app.listen(PORT,()=>{ 
    console.log('server listening at port',PORT)
   
})
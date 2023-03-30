import express from 'express';

const PORT = 5000;
const app = express();

app.get('/path',(req,res)=>{
    res.send(req.path)
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT) 
})
//path shows the inserted after /
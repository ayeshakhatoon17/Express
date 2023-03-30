import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("work hora dekhe")
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
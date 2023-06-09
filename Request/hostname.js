import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send(req.hostname)//shows host's ip address: 192.168.0.176
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
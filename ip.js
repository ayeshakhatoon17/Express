import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send(req.ip) //::ffff:192.168.0.140 shows the ip of requested one's
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send(req.method) //GET, shows which http method we are using
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})

//HTTP methods
//GET
//PUSH
//PUT
//DELETE
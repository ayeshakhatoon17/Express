import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
    res.status(200) //it shows the status of code 
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
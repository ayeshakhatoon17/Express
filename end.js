import express from 'express';

const PORT = 5000;
const app = express();

app.get('/',(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
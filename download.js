import express from 'express';

const PORT = 5000;
const app = express();

app.get('/download',(req,res)=>{
    res.status(200).download("./intro.txt"); 
})

app.listen(PORT,()=>{
    console.log('server listening at port',PORT) 
})
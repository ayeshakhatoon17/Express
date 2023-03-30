import express from 'express';

const PORT = 5000;
const app = express();

app.get('/ayesha',(req,res)=>{
    res.redirect("https://ayeshakhatoon.com")
})
//when client access with /ayesha it redirects to the ayeshakhatoon.com webiste


app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
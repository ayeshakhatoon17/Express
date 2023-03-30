import express from 'express';

const PORT = 5000;
const app = express();

// Error Handling is used for custom mesage for accessing different route for that we use app.use
app.get('/',(req,res)=>{
    res.status(200).send("work hora dekhe")
})
app.get('/ayesha',(req,res)=>{
    res.status(200).send("Ayesha")
})

app.use((req,res)=>{
res.status(404).send(`<a href= "http://192.168.0.176/"> Click ME /a>`) //if user access other routes it shows the correct link to go back to correct page
})


app.listen(PORT,()=>{
    console.log('server listening at port',PORT)
})
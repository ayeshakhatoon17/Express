import express from 'express'

const PORT = 5000;
const app = express()


// for eachrequest we can get only one respone so only one res.send or res.json works
app.get('/',(req,res)=>{

    //res.send('hi iam ayesha')//to send text
    
    res.json({name : "ayesha"})//json to send object or json // to convert object into JSON
})
/* app.get('/ayesha',(req,res)=>{
    //res.send('hi iam ayesha')
}) 
we can access the above response using http://192.168.0.176/ayesha
*/

app.listen(PORT, ()=>{
console.log('server is ruuning at port', PORT)
})
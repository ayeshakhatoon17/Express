import express from 'express'

const PORT = 5000;
const app = express()


app.get('/name/:fname',(req,res)=>{
    console.log(req.params) 

res.send(req.params)

})

app.listen(PORT,()=>{
console.log('server running at port no',PORT)
})
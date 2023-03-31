import express from 'express'

const PORT = 5000
const route = express.Router()

route.get('/register',(req,res)=>{
    res.status(200).send("Guest's register page")
})

route.get('/login',(req,res)=>{
    res.status(200).send("Guest's Login page")
})

export default route
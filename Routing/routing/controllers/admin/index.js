import express from 'express'

const PORT = 5000
const router = express.Router()

router.get('/adminpage',(req,res)=>{
    res.status(200).json({msg:"register user API"})
})

router.get('/login',(req,res)=>{
    res.status(200).json({msg:"register user API login page"})
})

export default router;



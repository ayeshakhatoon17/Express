import express from 'express'

const PORT = 5000
const router = express.Router()

router.get('/ayesha',(req,res)=>{
    res.status(200).json({msg:"hii"})
})



export default router;
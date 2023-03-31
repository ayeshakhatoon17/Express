import express from 'express'
import adminAPI from './controllers/admin/index.js'
import usersAPI from './controllers/users/index.js'
import guestsAPI from './controllers/Guest/index.js'

const PORT = 5000
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send("hii")
});
app.use("/admin",adminAPI)
app.use("/users",usersAPI)
app.use("/guests",guestsAPI)

app.listen(PORT,()=>{
    console.log('servering at port no',PORT)
})
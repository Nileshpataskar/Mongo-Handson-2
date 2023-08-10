const express=require('express')
const route = require('./route')
const app=express()

app.use(express.json())
app.use("/api",route)

app.listen(5007,()=>{console.log("run");})
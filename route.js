const { addMultipleData, getData, experience, salary, graduated, salarybetween, deletesome } = require("./employee")

const route=require("express").Router()

route.post("/one",addMultipleData)
route.get("/two",getData)
route.get("/three",experience)
route.get("/four",salary)
route.get("/five",graduated)
route.get("/six",salarybetween)
route.get("/seven",deletesome)



module.exports=route
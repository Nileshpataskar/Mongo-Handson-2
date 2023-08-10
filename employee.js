const { database } = require("./db");

const employee = database.collection("employee");

const addMultipleData = async (req, res) => {
  const data = req.body;
  const result =await employee.insertMany(data);
  console.log({ msg: "add multiple data Successfull ", result: result });

  res.send(result);
};
const getData = async (req, res) => {
  const data =await employee.find().toArray();
  res.send(data);
};

const experience=async(req,res)=>{
    const data=await employee.find({"overallExp":{"$gte":"2"}}).toArray()
    res.send(data)
}
const salary=async(req,res)=>{
    const data=await employee.find({"salary":{"$gt":"30000"}}).toArray()
    res.send(data)
}
const graduated=async(req,res)=>{
    const data=await employee.find({"yearGrad":{"$gt":"2015"}},{"overallExp":{"$gt":"1"}}).toArray()
    res.send(data)
}
const salarybetween=async(req,res)=>{
    const data=await employee.find({"salary":{"$gte":"30000","$lte":"70000"}}).toArray()
    res.send(data)
}

const deletesome=async(req,res)=>{
    const data=await employee.deleteMany({"lastCompany":"Y"}).toArray()
    res.send(data)
}



module.exports = { addMultipleData, getData,experience,salary,graduated,salarybetween,deletesome };

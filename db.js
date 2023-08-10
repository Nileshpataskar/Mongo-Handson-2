const { MongoClient } = require("mongodb")

const url="mongodb://127.0.0.1:27017"

const mongoClient=new MongoClient(url)
try{
    mongoClient.connect()
}
catch(err){
    console.log(err,"error while joining");
}

const database=mongoClient.db("hr_handon_two")

module.exports={database}
const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='statsdb'
const client= new MongoClient(url);
async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('uscensus');
    let data = await collection .insertMany([{"city":"Pacoima","Zip":"91331","sate":"CA","income":"60360","age":"33"}, {"city":"Ketchinkan","Zip":"99950","sate":"AK","income":"00000","age":"00"}]);
    console.log(data)


}

getData();

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("statsdb");
//   var myquery = { income: "00000",age:"00"};
//   var newvalues = { $set: {  income: "38910",age:"46" } };
//   dbo.collection("uscensus").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log(newvalues);
//     console.log("1 row updated sucessfully");
   
//   });
// });
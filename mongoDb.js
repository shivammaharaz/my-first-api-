const {MongoClient, Collection}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const dbName='DemoData';

async function dbConnect(){
    let result =await client.connect();
    let db=result.db(dbName);
    let collection=db.collection('test');
    return collection;
}

module.exports=dbConnect;
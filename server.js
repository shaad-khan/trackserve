var express=require('express');
var app=express();
var JSONStream = require('JSONStream');
var body=require('body-parser');
//var mongojs= require('mongojs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://trackserve:5gECLKeOXoJyP30GCQj7ZreoL3lBcuhlHZq0mFOynmXPUDcJKi4jJJmTkMQuwsq24v4alZaEwkuXi1JutIIugw==@trackserve.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
app.use(express.static(__dirname + "/public"));
app.use(body.json());
var port = process.env.port || 1337;
app.post('/cpu',function(req,res){
    console.log(req.body);
   // res.send(req.body);
 MongoClient.connect(url, function(err, db) {
     db.collection('cpu').insert(req.body,function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the contactlists collection.");
     }
    )
 });
});
app.get('/config',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('config').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});

//res.writeHead(200, { 'Content-Type': 'application/json'});
//cursor.stream().pipe(JSONStream.stringify()).pipe(res);
/*cursor.each(function(err, doc) {
    assert.equal(err, null);
    
        console.dir(doc);
       per.push(doc);
       
      
      // res.send(doc);
        //console.log(per);
        
    },function(){
      db.close();
     //
     
    });
/*person1={
        name:"shaad",
        email:"shaad39@gmail.com",
        phn:"1212121"
    };
    person2={
        name:"john",
        email:"john@gmail.com",
        phn:"34353"
    };
    person3={
        name:"khan",
        email:"khan@gmail.com",
        phn:"1234"
    };

 var c=[person1,person2,person3];
 //console.log(c);*/

 
    });
    //res.send(per);
});
app.get('/config2',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('schedule').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.post('/config',function(req,res){
    console.log(req.body);
 MongoClient.connect(url, function(err, db) {
     db.collection('config').insert(req.body,function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the config collection.");
     }
    )
 });
 

});
app.post('/config2',function(req,res){
    console.log(req.body);
 MongoClient.connect(url, function(err, db) {
     db.collection('schedule').insert(req.body,function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the config collection.");
     }
    )
 });
 

});
app.listen(port);

console.log("server runing on 2000");
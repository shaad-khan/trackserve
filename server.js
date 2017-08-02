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
var port = process.env.port || 1331;
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
app.post('/coyote',function(req,res){
   // console.log(req.body);
    MongoClient.connect(url, function(err, db) {
    for(var i = 0; i < req.body['Data']['dataTable'].length;i++)
    {

     db.collection('coyote').insert(req.body['Data']['dataTable'][i],function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the config collection.");
     }
    )
    }
 });
 
    
 /*MongoClient.connect(url, function(err, db) {
     db.collection('coyote').insert(req.body['Data'],function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the config collection.");
     }
    )
 });*/
 

});
app.get('/coyote/info',function(req,res){
   // console.log(req.body);
    /*MongoClient.connect(url, function(err, db) {
    for(var i = 0; i < req.body['Data']['dataTable'].length;i++)
    {

     db.collection('coyote').insert(req.body['Data']['dataTable'][i],function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the config collection.");
     }
    )
}*/

var date = req.param('date');
date=convert(date);

function convert(str) {
    var date = new Date(str),
        mnth = date.getMonth()+1,
        day  = date.getDate();
    return [mnth, day,date.getFullYear()].join("/");
}
//res.send(user_id);
 //console.log(req.query.color);
   MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('coyote').find({'Date':{ "$regex":date}}).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });




 });


 app.get('/coyote/vcinfo',function(req,res){
   

var datev = req.param('date');
var query = {};
query["$or"]=[];
     var str='';
 for(var i=0;i<5;i++)
 {
     if(datev!='')
     {
var date = new Date(datev);
     }
     else{
       var date = new Date();  
     }
var last = new Date(date.getTime() - (i * 24 * 60 * 60 * 1000));
var day =last.getDate();
var month=last.getMonth()+1;
var year=last.getFullYear();

var d=([month,day,year].join("/"));

query["$or"].push({'Date':{'$regex':d}});

 }
 
 //console.log("db.getCollection('coyote').find({$or:["+str+"]})");

  MongoClient.connect(url, function(err, db) {
      console.log(query);
assert.equal(null, err);
var cursor =db.collection('coyote').find(query).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });




 });
app.listen(port);

console.log("server runing on 2000");
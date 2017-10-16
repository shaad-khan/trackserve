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
var port = process.env.port || 3001;
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
 res.json({"status":"ok"});
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
app.get('/appconfig',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Appconfig').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});

app.get('/appconfig/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Appconfig').find({'servername':req.param('servername')}).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});

/******************************************************************************* */
app.get('/appdelete/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
//assert.equal(null, err);
db.collection('Appservercheck').remove({'servername':req.param('servername')}),function(err, docs)
{
 //assert.equal(err, null);
res.json({"status":"ok"});

};
    });
    res.json({"status":"ok"});
});
app.get('/sqldelete/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
//assert.equal(null, err);
db.collection('SqlChecks').remove({'servername':req.param('servername')}),function(err, docs)
{
 //assert.equal(err, null);
res.json({"status":"ok"});

};
    });
    res.json({"status":"ok"});
});
/*-------------------------------------------------------------------------*/




/************************************************************************************* */


app.get('/gconfig/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
if(req.param('servername'))
{
var cursor =db.collection('GeneralConfig').find({'servername':req.param('servername')}).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
}
else
{
var cursor =db.collection('GeneralConfig').find().toArray(function(err, docs)


{
 assert.equal(err, null);
res.json(docs);

});

}
    });
});
app.get('/webconfig',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Webconfig').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.get('/dbconfig',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Dbconfig').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.get('/testsql',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('testsql').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.get('/disk',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Disk').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.get('/dbconfig',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Dbconfig').find().toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});

app.get('/cpu',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('cpu').find().toArray(function(err, docs)
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
app.post('/process',function(req,res){
    console.log(req.body);
 MongoClient.connect(url, function(err, db) {
     db.collection('processmonitor').insert(req.body,function(err, result) {
    assert.equal(err, null);
    //'console.log("Inserted a document into the config collection.");
     }
    )
 });
 response.end();

});
app.post('/gpost',function(req,res){
   
global.x=0;
  /*  collection.update(
   {username:"Bob"},
   {$set:{'longitude': '58.3', 'latitude': '0.3'}},
   { upsert: true}
)*/
var ob={"status":true};
var ob2={"status":false};
 MongoClient.connect(url, function(err, db) {

db.collection('GeneralConfig').find({'servername':req.body.servername}).toArray(function(err, docs)
{
 assert.equal(err, null);
//res.json(docs);
global.x=docs.length;
//x=1;
//console.log("docs length "+docs.length);
console.log("value of x inside "+ global.x );

if(global.x==0)
{
    db.collection('GeneralConfig').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )
}
else
{
    res.json(ob2);
    res.end();
}

 })

})
 
});
app.post('/appservercheck',function(req,res){
var ob={"status":true};
//var x=json.parse(req.body)
//res.json(req.body);

MongoClient.connect(url, function(err, db) {


db.collection('Appservercheck').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )

})

})

app.post('/gpost',function(req,res){
   
global.x=0;
  /*  collection.update(
   {username:"Bob"},
   {$set:{'longitude': '58.3', 'latitude': '0.3'}},
   { upsert: true}
)*/
var ob={"status":true};
var ob2={"status":false};
 MongoClient.connect(url, function(err, db) {

db.collection('GeneralConfig').find({'servername':req.body.servername}).toArray(function(err, docs)
{
 assert.equal(err, null);
//res.json(docs);
global.x=docs.length;
//x=1;
//console.log("docs length "+docs.length);
console.log("value of x inside "+ global.x );

if(global.x==0)
{
    db.collection('GeneralConfig').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )
}
else
{
    res.json(ob2);
    res.end();
}

 })

})
 
});
app.post('/sqlcheck',function(req,res){
var ob={"status":true};
//var x=json.parse(req.body)
//res.json(req.body);

MongoClient.connect(url, function(err, db) {


db.collection('SqlChecks').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )

})

})


app.post('/gpost',function(req,res){
   
global.x=0;
  /*  collection.update(
   {username:"Bob"},
   {$set:{'longitude': '58.3', 'latitude': '0.3'}},
   { upsert: true}
)*/
var ob={"status":true};
var ob2={"status":false};
 MongoClient.connect(url, function(err, db) {

db.collection('GeneralConfig').find({'servername':req.body.servername}).toArray(function(err, docs)
{
 assert.equal(err, null);
//res.json(docs);
global.x=docs.length;
//x=1;
//console.log("docs length "+docs.length);
console.log("value of x inside "+ global.x );

if(global.x==0)
{
    db.collection('GeneralConfig').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )
}
else
{
    res.json(ob2);
    res.end();
}

 })

})
});


app.post('/appost',function(req,res){
   
global.x=0;
  /*  collection.update(
   {username:"Bob"},
   {$set:{'longitude': '58.3', 'latitude': '0.3'}},
   { upsert: true}
)*/
var ob={"status":true};
var ob2={"status":false};
 MongoClient.connect(url, function(err, db) {

db.collection('Appconfig').find({'servername':req.body.servername,'domain':req.body.domain}).toArray(function(err, docs)
{
 assert.equal(err, null);
//res.json(docs);
global.x=docs.length;
//x=1;
//console.log("docs length "+docs.length);
console.log("value of x inside "+ global.x );

if(global.x==0)
{
    db.collection('Appconfig').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )
}
else
{
    res.json(ob2);
    res.end();
}

 })






})



 

});

app.post('/webpost',function(req,res){
   
global.x=0;
  /*  collection.update(
   {username:"Bob"},
   {$set:{'longitude': '58.3', 'latitude': '0.3'}},
   { upsert: true}
)*/
var ob={"status":true};
var ob2={"status":false};
 MongoClient.connect(url, function(err, db) {

db.collection('Webconfig').find({'servername':req.body.servername,'domain':req.body.domain}).toArray(function(err, docs)
{
 assert.equal(err, null);
//res.json(docs);
global.x=docs.length;
//x=1;
//console.log("docs length "+docs.length);
console.log("value of x inside "+ global.x );

if(global.x==0)
{
    db.collection('Webconfig').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )
}
else
{
    res.json(ob2);
    res.end();
}

 })






})



 

});
app.post('/dbpost',function(req,res){
   
global.x=0;
  /*  collection.update(
   {username:"Bob"},
   {$set:{'longitude': '58.3', 'latitude': '0.3'}},
   { upsert: true}
)*/
var ob={"status":true};
var ob2={"status":false};
 MongoClient.connect(url, function(err, db) {

db.collection('Dbconfig').find({'servername':req.body.servername,'domain':req.body.domain}).toArray(function(err, docs)
{
 assert.equal(err, null);
//res.json(docs);
global.x=docs.length;
//x=1;
//console.log("docs length "+docs.length);
console.log("value of x inside "+ global.x );

if(global.x==0)
{
    db.collection('Dbconfig').insert(req.body,function(err, result) {
    assert.equal(err, null);
    res.json(ob);
    res.end();
     }
    )
}
else
{
    res.json(ob2);
    res.end();
}

 })






})

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
 
response.end();
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


/*----------------------------------------------------------------------*/

app.get('/appinfo/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Appservercheck').find({'servername':req.param('servername')}).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});

app.get('/prcs/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('prcs').find({'servername':req.param('servername')}).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});

app.get('/prcsdel/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
//assert.equal(null, err);
db.collection('prcs').remove({'servername':req.param('servername')}),function(err, docs)
{
 //assert.equal(err, null);
res.json({"status":"ok"});

};
    });
    res.json({"status":"ok"});
});
app.post('/prcs',function(req,res){
    console.log(req.body);
 MongoClient.connect(url, function(err, db) {
     db.collection('prcs').insert(req.body,function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the config collection.");
     }
    )
 });
  res.end();
});
app.get('/diskdel/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
//assert.equal(null, err);
db.collection('Disk').remove({'servername':req.param('servername')}),function(err, docs)
{
 //assert.equal(err, null);
res.json({"status":"ok"});

};
    });
    res.json({"status":"ok"});
});

app.post('/disk',function(req,res){
    console.log(req.body);
 MongoClient.connect(url, function(err, db) {
     db.collection('Disk').insert(req.body,function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the config collection.");
     }
    )
 });
  res.end();
});
app.get('/disk/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('Disk').find({'servername':req.param('servername')}).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.get('/dbcheck/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('SqlChecks').find({'servername':req.param('servername')}).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.get('/cpu/:servername',function(req,res){
    //var per=[];
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('cpu').find({'servername':req.param('servername')}).sort({_id:-1}).limit(1).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.get('/cpu/:servername/:limit',function(req,res){
    //var per=[];
    var x=parseInt(req.params.limit);
//console.log(x+"   "+req.params.servername);

    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('cpu').find({'servername':req.params.servername}).sort({_id:-1}).limit(x).toArray(function(err, docs)
{
 assert.equal(err, null);
res.json(docs);

});
    });
});
app.put('/test2/:servername',function(req,res){
    //var per=[];
    var x=parseInt(req.params.servername);
//console.log(x+"   "+req.params.servername);
    var updata=req.body.Data;
    console.log(updata);
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('test2').update({'servername':req.params.servername},{$set:{Data:updata}}, {safe:true},function(err, result)
{
 if (err) {
                console.log('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(updata);
            }
        });
     });

});



app.put('/sqlupdate/:servername/:checktype/:domain',function(req,res){
    //var per=[];
    var x=parseInt(req.params.servername);
    var type=req.params.checktype;
    var domain=req.params.domain;
//console.log(x+"   "+req.params.servername);
    var updata=req.body.Data;
    console.log(updata);
    MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
var cursor =db.collection('SqlChecks').update({'servername':req.params.servername,'Type':type,'Domain':domain},{$set:{Data:updata}}, {safe:true},function(err, result)
{
 if (err) {
                console.log('Error updating wine: ' + err);
                res.json({'error':'An error has occurred'+err});
            } else {
                console.log('' + result + ' document(s) updated');
                res.json(result);
            }
        });
     });
});
/*------------------------------------------------------------------*/








app.listen(port);

console.log("server runing on 2000");
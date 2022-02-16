const express=require('express');
const res = require('express/lib/response');
const app=express();

const server=app.listen(3000,()=>{
    console.log('Start Server:localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //ejs: Embedded JavaScript templet
app.engine('html',require('ejs').renderFile);
console.log('dirname: ',__dirname);


app.get('/', function (req, res) {
    res.render('index.html')
  }) 
 
app.get('/about', function (req, res) {
    res.render('about.html')
}) 

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});

//database page
app.get('/db', function (req, res) {
    res.render('about.html')
}) 

pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
   
    // Use the connection
    connection.query('select * from test', function (error, results, fields) {
      res.send(JSON.stringify(results));
      console.log('results',results);
        // When done with the connection, release it.
      connection.release();
   
      // Handle error after the release.
      if (error) throw error;
   
      // Don't use the connection here, it has been returned to the pool.
    });
  });
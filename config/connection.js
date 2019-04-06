//mySQL connection data
 var mysql = require('mysql');
 var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'Mobylulu11!',
     database: 'backpack_db'
 })

 connection.connect(function(err){
     if(err)throw err;
     console.log("connected as id: "+connection.threadId);
 });

//export connection here
 module.exports = connection;
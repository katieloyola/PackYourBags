//create an object that will all have methods with it - to represent all the things we can do with our data
//import connection
var connection = require('./connection.js');

//create orm.all
//create connection query that selects everything
var orm = {
        all: function (tableInput, cb) {
            connection.query('SELECT * FROM ' + tableInput + ';', function (err,
                result) {
                if (err) throw err;
                //uses callback 
                //result=everything * in the table in the db
                cb(result)
            })
        },
//we got here from model/backpack.js (line 11)
//update: is 'renaming' the 3 values in the string on line 12
//orm.update is how we arrived here
        update: function (tableInput, condition, cb) {
            //connection is using the mysql language
            //we declared connection in a variable at the top
            //connection.query is telling us that we will connect to a database tht we have a;ready set up and we're going to do something
            //we're going to UPDATE - so we have to tell it WHAT we're going to update, and what the VALUE of the UPDATE is
            connection.query('UPDATE ' + tableInput +
                ' SET packed=true WHERE id=' + condition + ';',
                //function below is built into connection
                function (err, resulted) {
                    //throw=stop
                    if (err) throw err;
                    //resulted, coming from connection query above 
                    cb(resulted);
                })
        },

        create: function (tableInput, val, cb) {
            //database always gives feedback
            //either yes it worked, or no it didn't
            //those responses is the 'result' in the sense of success or failure. yes i changed it or no i did not
            connection.query('INSERT ' + tableInput + " (backpack_item) VALUES ('"+val+"');", 
            function (err, result) {
                //this err is the sql statement is wrong or the connection is bad
                    if (err) throw err;
                    //this result is a positive or a negative. its a response from the database
                    cb(result);
                })
            }
        }

        module.exports = orm;
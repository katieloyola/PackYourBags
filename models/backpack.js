var orm = require('../config/orm.js');

var backpack = {
    //callback creates a function, and waits for you to call it. And can only be called once.
    all: function(cb){
        orm.all('backpacks',function(res){
            //res is the entire table from the orm, because we told it to on line 14. Because of the CALLBACK RESULT
            cb(res);
        })
    },
//you can write methods with : as long as they exist INSIDE an OBJECT!
    update: function(id,cb){
        orm.update('backpacks',id,cb);
    },

    create: function(name,cb){
        //go to orm
        //go to create
        //and give it 3 pieces of informatio: 'backpacks', name, cb
        orm.create('backpacks', name, cb);
    }
}
//this packages up backpack, and makes it available on all pages
module.exports= backpack; 
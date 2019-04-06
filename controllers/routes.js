//create routes file
//refer to express and express.router
var express = require('express');
var router = express.Router();
var backpack = require('../models/backpack.js');

//set up base routes to '/'
//'get' = normal request
router.get('/', function (req, res) {
    //all is a method
    //to see what all is doing, follow the route above ('../models/backpack.js')
    backpack.all(function (backpack_data) {
        console.log(backpack_data);
        //render is for handlebars, a method, "got get handlebars index and give it to the user"
        res.render('index', {
            //"also give the user backpack_data"
            //which becomes the ENTIRE table (see backpack.js line 8)
            //backpack_data only exists here, but it "was" res, and then result, and now it's here as backpack_data which is the entire table from the db
            backpack_data});
    })
})
//router is an object, and must have function(1,2) to follow it,to use the router information. PLACEMENT MATTERS. 
//router is part of express
//express has different objects, and different methods ATTACHED to those objects
//some of those methods are .put, .get, .post, etc.
router.put('/backpacks/update', function (req, res) {
    backpack.update(req.body.backpack_id, function (result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/backpacks/create',function(req,res){
    backpack.create(req.body.backpack_item, function(result){
        res.redirect('/');
    })
})
module.exports = router;
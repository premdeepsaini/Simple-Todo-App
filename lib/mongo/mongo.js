const mongoose = require('mongoose');
//const mongoModel = require('./model/mongoModel');

function connect(uri){
    mongoose.connect(uri,function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Connection to MongoDB successful on '+uri);
        }
    });
}

exports.connect = connect;
//exports.model = mongoModel;

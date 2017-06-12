var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    text: {
        type:String,
        default:''
    },
    done: {
        type:Boolean,
        default:false
    }
});

var todoModel = mongoose.model('Todo',todoSchema);

exports.todoModel = todoModel;

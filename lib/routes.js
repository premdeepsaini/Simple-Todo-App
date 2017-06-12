const mongoModel = require('./mongo/model/mongoModel');

function getTodo(res){
    mongoModel.todoModel.find(function(err,data){
        if(err){
            console.log('Error in GetTodo: '+error);
            res.send(err);
        }else{
            console.log('GetTodo: '+data);
            res.json(data);
        }
    });
}

function getRoutes(app){
    app.get('/api/todos',function(req,res){
        console.log('In GET');
        getTodo(res);
    });

    app.post('/api/todos/',function(req,res){
        console.log('In POST');
        mongoModel.todoModel.create({
            text:req.body.text,
            done:req.body.done
        },function(err,data){
            if(err){
                console.log('Error in POST: '+err);
                res.send(err);
            }else{
                console.log('POST:' + data);
                getTodo(res);

            }
        });
    });

    app.delete('/api/todos/:todo_id',function(req,res){
        console.log('In DELETE');
        mongoModel.todoModel.remove({
            _id:req.params.todo_id
        },function(err,data){
            if(err){
                console.log('Error in DELETE: '+err);
                res.send(err);
            }else{
                console.log('DELETE: '+data);
                getTodo(res);
            }
        });
    });

    app.post('/api/todos/update',function(req,res){
        console.log('In UPDATE');
        var query = {'_id':req.body._id}
        mongoModel.todoModel.findOneAndUpdate(query,req.body,function(err,data){
            if(err){
                console.log('Error in UPDATE: '+err);
                res.send(err);
            }else{
                console.log('UPDATE: '+data);
                getTodo(res);
            }
        });
    });
}

exports.getRoutes = getRoutes;

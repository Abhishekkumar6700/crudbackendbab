// import the model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try{
        //fetch all todos from database
        const todos = await Todo.find ({});

        //resposnse
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo is fetched",
        });
     
    }
    catch(err){
   
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server Error",
        });
    }
}

exports.getTodoById = async(req,res) =>{
    try{
      //extract todo item basis on id
      const id = req.params.id;
      const todo = await Todo.findById( {_id: id})

      //data forgiven id not found
      if(!todo) {
        return res.status(404).json({
            success:false,
            message:"NO data found with given id"
        })
      }
      //data for given id found
      res.status(200).json({
        success:true,
        data:todo,
        message:`todo ${id} data successfully fetched`,
      })
    }
    catch(err){
      console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server Error",
        });
    }
}
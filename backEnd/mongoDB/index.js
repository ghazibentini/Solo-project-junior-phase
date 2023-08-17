const mongoose = require("mongoose");
const Player = require("./Player");
const mongoUri = "mongodb://127.0.0.1/players"
mongoose
  .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("db mongo connected");
  })
  .catch((err) => console.log(err));
const db = mongoose.connection;


const getAllData = () => {
    return Player.find();
  };
  

  const deleteOne = (id) => {

    return Player.findByIdAndDelete({ _id:id });
  };
  const update = (id, data) => {
    return Player.findByIdAndUpdate({_id:id}, data, { new: true });
  };
  
  const add = (obj)=>{
  return Player.create(obj)
  }  


  module.exports ={db,
    getAllData,
    deleteOne,
    update,
    add,
}
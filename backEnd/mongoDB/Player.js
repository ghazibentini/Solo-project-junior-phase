const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const playerSchema = new mongoose.Schema({
    "PlayerName": String,
      "Team": String,
      "Jersey Number": Number,
      "Points": Number,
      "Rebounds": Number,
      "Assists": Number,
      "Steals": Number,
      "Blocks": Number,
      "ImageURL":String
})


const Player = mongoose.model("Player",  playerSchema)

let player = () =>{
    return player.find()
}


module.exports = Player;
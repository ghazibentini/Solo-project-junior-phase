const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

const db = require("./mongoDB/index.js");


app.use(cors());
app.use(express.json())



app.get("/api/players",(req,res)=>{
    db.getAllData()
    .then((results)=>{
        res.status(201).json(results)
    })
    .catch((error)=>{
        console.error('error fetching data',error)
        res.status(500).json({error:"error fetching data"})
    })
})


app.delete("/api/players/:_id", (req, res) => {
    const id = req.params._id;
    console.log(req.params,"params");
  console.log(id);
    db.deleteOne(id)
      .then((resp) => res.status(204).send(resp))
      .catch((err) => {
        console.log(err,"err");
        res.status(500).send(err);
      });
  });
  
  app.put("/api/players/:_id", (req, res) => {
    db.update(req.params._id, req.body)
      .then((result) => res.status(202).send(result))
      .catch((error) => res.send(500).send(error));
  });
  
  app.post("/api/players", (req, res) => {
    db.add(req.body)
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(500).send(err));
  });
  

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });



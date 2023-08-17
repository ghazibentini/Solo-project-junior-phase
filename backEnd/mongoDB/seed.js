const Player = require("./Player");
const { db } = require("./index")


const sampleData = require ("../data.json")


const insertSampleMovies = function () {
    Player.create(sampleData)
      .then(() => {
        console.log("Database seeded successfully");
      })
      .catch((error) => {
        console.log("error seeding the database: ", error);
      })
      .finally(() => {
        db.close();
      });
  };
  
  insertSampleMovies();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../model/listing.js");

// database mongoose connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

// database check
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66ec952f4f03e82f4ad4f81f",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();

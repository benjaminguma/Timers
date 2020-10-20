const express = require("express");
const mongo = require("mongodb");
const timersRoute = express.Router();

const url = "mongodb://127.0.0.1:27017/timers";
const mongo_client = mongo.MongoClient;
const client = new mongo_client(url, { useUnifiedTopology: true });
// https://zapier.com/shared/3ba444121b65ff3a84f4a5aa22f74f2d3596fa22

timersRoute.get("/", async (req, res, next) => {
  let data;
  try {
    await client.connect();
    data = await client.db().collection("timers").find({}).toArray();
  } catch (error) {
    next(error);
  }
  //   await client.close();
  res.status(200).json(data);
});
timersRoute.post("/", async (req, res, next) => {
  let data;
  const timer = req.body;
  try {
    await client.connect();
    data = await client.db().collection("timers").find({}).toArray();
    await client
      .db()
      .collection("timers")
      .insertOne({ ...timer });
  } catch (error) {
    next(error);
  }
  //   client.close();
  return res.status(201).json(timer);
});
timersRoute.delete("/:id", async (req, res, next) => {
  console.log("came here");
  try {
    await client.connect();
    await client
      .db()
      .collection("timers")
      .deleteOne({ id: req.params.id }, (err, res) => {
        if (err) next(err);
      });
    console.log(req.params.id);
  } catch (error) {
    next(error);
  }
  //   client.close();
  return res.json({ msg: `timer with id of ${req.params.id} was deleted` });
});
timersRoute.patch("/", async (req, res, next) => {
  console.log("came here");
  let data = req.body;
  try {
    await client.connect();
    client
      .db()
      .collection("timers")
      .updateOne({ id: req.body.id }, { $set: { ...data } });
    console.log(req.params.id);
  } catch (error) {
    next(error);
  }
  //   client.close();
  return res.json({ msg: `timer with id of ${req.params.id} was updated` });
});

module.exports = timersRoute;

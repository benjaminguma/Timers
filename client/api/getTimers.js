const mongo = require("mongodb");

const client = new mongo.MongoClient(
  process.env.MONGODB_URI ||
    "mongodb+srv://ben:1234@benjs-cluster.udh1t.mongodb.net/timers?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
);

module.exports = async (req, res) => {
  let data;
  try {
    await client.connect();
    data = client.db().collection("timerscoll").find().toArray();
  } catch (error) {
    return res.status(500);
  }

  res.send("hello");
};

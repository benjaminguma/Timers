const mongo = require("mongodb").MongoClient;
const client = new mongo(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
export default async (req, res, next) => {
  let data;
  const timer = req.body;
  try {
    await client.connect();
    // data = await client.db().collection("timers").find({}).toArray();
    await client
      .db()
      .collection("timerscoll")
      .insertOne({ ...timer });

    console.log("post successful");
  } catch (error) {
    return res.status(500);
  }
  //   client.close();
  return res.status(201).json(timer);
};

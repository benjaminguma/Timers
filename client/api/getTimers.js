const mongo = require("mongodb").MongoClient;
const client = new mongo(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
export default async (req, res) => {
  let data;
  try {
    await client.connect();
    data = await client.db().collection("timerscoll").find().toArray();
  } catch (error) {
    return res.status(500);
  }

  res.send(data);
};

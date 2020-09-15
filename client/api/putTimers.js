const mongo = require("mongodb").MongoClient;
const client = new mongo(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
export default async (req, res) => {
  let data = req.body;

  try {
    await client.connect();
    client
      .db()
      .collection("timerscoll")
      .updateOne({ id: req.body.id }, { $set: { ...data } });
  } catch (error) {
    return res.status(500);
  }
  //   client.close();
  return res.json({ msg: `timer with id of ${data.id} was updated` });
};

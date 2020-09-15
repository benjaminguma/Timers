const mongo = require("mongodb");

const client = new mongo.MongoClient(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
});

export default async (req, res) => {
  try {
    console.log("yewyeueueu", req.query.id);
    await client.connect();
    await client
      .db()
      .collection("timerscoll")
      .deleteOne({ id: req.query.id }, (err, res) => {
        if (err) next(err);
      });
    console.log(req.query.id);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
  //   client.close();
  return res.json({ msg: `timer with id of ${req.query.id} was deleted` });
};

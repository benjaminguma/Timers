const mongo = require("mongodb");

const client = new mongo.MongoClient(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
});

export default async (req, res) => {
  try {
    await client.connect();
    client
      .db()
      .collection("timerscoll")
      .deleteOne({ id: req.body.id }, (err, res) => {
        if (err) {
          console.log(err.message, req.body);
        }
      });
    console.log("deleted o", req.body);
  } catch (error) {
    return res.status(500);
  }
  //   client.close();
  return res.json({ msg: `timer with id of ${req.query.id} was deleted` });
};

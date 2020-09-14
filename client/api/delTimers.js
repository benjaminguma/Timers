const mongo = require("mongodb");

const client = new mongo.MongoClient(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
});

module.exports = async (req, res, next) => {
  try {
    await client.connect();
    await client
      .db()
      .collection("timerscoll")
      .deleteOne({ id: req.params.id }, (err, res) => {
        if (err) next(err);
      });
    console.log(req.params.id);
  } catch (error) {
    next(error);
    return res.status(500);
  }
  //   client.close();
  return res.json({ msg: `timer with id of ${req.params.id} was deleted` });
};

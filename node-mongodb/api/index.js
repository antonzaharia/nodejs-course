import express from "express";
import { MongoClient, ObjectID } from "mongodb";
import assert from "assert";
const config = {
  mongodbURI: "mongodb://localhost:27017/test",
};

let mdb;
MongoClient.connect(config.mongoDbUri, (err, db) => {
  assert.strictEqual(null, err);
  mdb = db;
});

const router = express.Router();

router.get("/contests", (req, res) => {
  let contests = {};
  mdb
    .collection("contests")
    .find({})
    .project({
      categoryName: 1,
      contestName: 1,
    })
    .each((err, contest) => {
      assert.strictEqual((null, err));
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest._id] = contest;
    });
});
router.get("/names/:nameIds", (req, res) => {
  const nameIds = req.params.nameIds.split(",").map(ObjectID);
  let names = {};
  mdb
    .collection("names")
    .find({ _id: { $in: nameIds } })
    .each((err, name) => {
      assert.strictEqual((null, err));
      if (!name) {
        res.send({ name });
        return;
      }
      names[name._id] = name;
    });
});
router.get("/contests/:contestId", (req, res) => {
  mdb
    .collection("contests")
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then((contest) => res.send(contest))
    .catch(console.error);
});

export default router;

import express from "express";
import { MongoClient } from "mongodb";
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
      id: 1,
      categoryName: 1,
      contestName: 1,
    })
    .each((err, contest) => {
      assert.strictEqual((null, err));
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest.id] = contest;
    });
});
router.get("/names/:nameIds", (req, res) => {
  const nameIds = req.params.nameIds.split(",").map(Number);
  let contests = {};
  mdb
    .collection("names")
    .find({ id: { $in: nameIds } })
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
    })
    .each((err, contest) => {
      assert.strictEqual((null, err));
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest.id] = contest;
    });
});
router.get("/contests/:contestId", (req, res) => {
  mdb
    .collection("contests")
    .findOne({ id: Number(req.params.contestId) })
    .then((contest) => res.send(contest))
    .catch(console.error);
});

export default router;

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    lo: "hi",
  });
});

module.exports = router
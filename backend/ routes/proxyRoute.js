const express = require("express");
const router = express.Router();
const fetchProxy = require("../utils/fetchProxy");

router.get("/", async (req, res) => {
  const url = req.query.url;
  const result = await fetchProxy(url);
  if (!result) return res.send("Proxy error.");
  res.send(result);
});

module.exports = router;


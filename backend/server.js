
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const target = req.query.url;

  if (!target) return res.send("No URL provided.");

  try {
    const result = await axios.get(target, {
      responseType: "arraybuffer"
    });

    res.set("Content-Type", result.headers["content-type"]);
    res.send(result.data);

  } catch (err) {
    res.send("Proxy Error: " + err.message);
  }
});

app.listen(4000, () => console.log("SUB v3 Proxy Running on :4000"));

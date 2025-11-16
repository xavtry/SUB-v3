const axios = require("axios");

module.exports = async function fetchProxy(url) {
  try {
    const res = await axios.get(url, {
      responseType: "arraybuffer"
    });
    return res.data;
  } catch (err) {
    return null;
  }
};


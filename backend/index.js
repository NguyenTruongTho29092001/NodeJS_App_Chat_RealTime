const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // get create user on Chat Engine!
  try {
    const read = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "449c961a-5a76-4124-a691-c268480d6f3f" } }
    );
    return res.status(read.status).json(read.data);
  } catch (error) {
    return res.status(error.respone.status).json(error.respone.data);
  }
});

app.listen(3001);

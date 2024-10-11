const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  const data = { hello: "world" };
  const acceptHeader = req.headers["accept"];

  if (acceptHeader.includes("application/json")) {
    res.json(data);
  } else if (acceptHeader.includes("text/csv")) {
    res.setHeader("Content-Type", "text/csv");
    res.send("hello,world");
  } else if (acceptHeader.includes("application/xml")) {
    res.setHeader("Content-Type", "application/xml");
    res.send("<root><hello>world</hello></root>");
  } else {
    res.status(406).send("Not Acceptable");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});

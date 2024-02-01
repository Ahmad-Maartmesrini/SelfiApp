const express = require("express");
const dataBase = [];

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (request, response) => {
  console.log("I got a request!");
  const data = request.body;
  dataBase.push(data);
  response.json({
    status: "success",
    latitude: data.lat,
    longitude: data.lon,
  });
});

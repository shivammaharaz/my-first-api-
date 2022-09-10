const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const dbConnect = require("./mongoDb");
const { json } = require("body-parser");
const cors=require('cors')
app.use(cors())
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, resp) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let comment = req.body.comment;

  let data = {
    name: name,
    email: email,
    phone: phone,
    comment: comment,
  };
  // const insert = async () => {
    let connect = await dbConnect();
    let res = connect.insertOne(data);
  // };
  // insert();

  return resp.redirect("success.html");
});
app.get("/data", async (req, resp) => {
  const dat = await dbConnect();
  const res = await dat.find({}).toArray();
  // console.log(res);

  resp.send(res);
});

app.get("/", (req, resp) => {
  // resp.set({ "Allow-access-origin": "*" });
  return resp.redirect("index.html");
});

app.listen(3000);

console.log("listening on port:3000");

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    const totalLen=req.body["fname"].length;
    res.render("index.ejs",{namelength: totalLen});
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

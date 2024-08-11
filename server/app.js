const express = require("express");
const app = express();
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



app.use(bodyParser.json());
var path = require('path');
app.use(express.static(path.resolve('./public')));
app.use(cors());

const bannerRoutes = require("./routes/banners");
app.use("/banner", bannerRoutes);

const productRoutes = require("./routes/product");
app.use("/product", productRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("we are at home");
});

// connet to DB
mongo
  .connect(
    "mongodb+srv://zubairhamid28:zubairhamid28@rest.ow86qmp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db port 5000");
  }).catch((error) => console.log(error));
  
  app.listen(5000);



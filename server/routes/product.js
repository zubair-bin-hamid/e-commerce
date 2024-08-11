const express = require("express");
const router = express.Router();
const Product = require("../modals/product");

// get all product
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json({ massege: err });
  }
});

// get new arrivals only
router.get("/new_arrivals", async (req, res) => {
  try {
    const products = await Product.find({ newArrival: true });
    res.json(products);
  } catch (err) {
    res.json({ massege: err });
  }
});

// get new recommended
router.get("/recommended", async (req, res) => {
  try {
    const products = await Product.find({ recommended: true })
      .select("title price imgurl")
      .exec();
    res.json(products);
  } catch (err) {
    res.json({ massege: err });
  }
});

// submit a post
router.post("/", (req, res) => {
  const post = new Product({
    title: req.body.title,
    price: req.body.price,
    imgurl: req.body.imgurl,
    recommended:
      req.body.recommended !== undefined ? req.body.recommended : undefined,
    newArrival:
      req.body.newArrival !== undefined ? req.body.newArrival : undefined,
  });
  post
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ massege: err }));
});

// // get the specific post
// router.get("/:postId", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.postId);
//     res.json(product);
//   } catch (err) {
//     res.json({ massege: err });
//   }
// });

// // delete a specfic post
// router.delete("/:postId", async (req, res) => {
//   try {
//     const product = await Product.deleteOne({ _id: req.params.postId });
//     res.json(product);
//   } catch (err) {
//     res.json({ massege: err });
//   }
// });

// // update post
// router.patch("/:postId", async (req, res) => {
//   try {
//     const product = await Product.updateOne(
//       { _id: req.params.postId },
//       { $set: { title: req.body.title, description: req.body.description } }
//     );
//     res.json(product);
//   } catch (err) {
//     res.json({ massege: err });
//   }
// });

module.exports = router;

const express = require("express");
const router = express.Router();
const Banner = require("../modals/banner");

// get all banner
router.get("/", async (req, res) => {
  try {
    const banner = await Banner.find();
    res.json(banner);
  } catch (err) {
    res.json({ massege: err });
  }
});

// submit a post
router.post("/", (req, res) => {
  const post = new Banner({
    heading: req.body.heading,
    subheading: req.body.subheading,
    slide: req.body.slide,
  });
  post
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ massege: err }));
});

// // get the specific post
// router.get("/:postId", async (req, res) => {
//   try {
//     const banner = await Banner.findById(req.params.postId);
//     res.json(banner);
//   } catch (err) {
//     res.json({ massege: err });
//   }
// });

// // delete a specfic post
// router.delete("/:postId", async (req, res) => {
//   try {
//     const banner = await Banner.deleteOne({ _id: req.params.postId });
//     res.json(banner);
//   } catch (err) {
//     res.json({ massege: err });
//   }
// });

// // update post
// router.patch("/:postId", async (req, res) => {
//   try {
//     const banner = await Banner.updateOne(
//       { _id: req.params.postId },
//       { $set: { title: req.body.title, description: req.body.description } }
//     );
//     res.json(banner);
//   } catch (err) {
//     res.json({ massege: err });
//   }
// });

module.exports = router;

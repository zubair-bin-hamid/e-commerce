const mongo = require("mongoose");

const ProductSchema = mongo.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgurl: {
    type: String,
    required: true,
  },
  recommended: {
    type: Boolean,
    default: false,
  },
  newArrival: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongo.model("products", ProductSchema);

const express = require('express')

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("First Middleware");
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit" >Add Product</button></form>'
  );
  // next()
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
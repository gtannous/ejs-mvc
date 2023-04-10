const express = require("express");
const router = express.Router();
//route for magic page
router.get("/", function (req, res) {
  res.render("magic");
});


module.exports = router;
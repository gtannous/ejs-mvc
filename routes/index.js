const express = require("express");
const router = express.Router();

const user = {
    firstName: 'Phil',
    lastName: 'Cook',
}

//router for index page
router.get("/", function(req, res, next){
    // res.render("index", {
    //     user: user
    // });
    res.redirect("/catalog");
});


module.exports = router;
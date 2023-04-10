const express = require("express");
const router = express.Router();

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]


router.get('/', (req, res) => {
    res.render('articles', {
        articles: posts
    })
})


module.exports = router;
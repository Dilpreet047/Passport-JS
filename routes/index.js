const express = require('express');
const router = express.Router();


//creating response on receiving request
//when url will end with '/' this part of the program will be invoked
router.get('/', (req, res) => {
    res.render('welcome');
})
module.exports = router; 
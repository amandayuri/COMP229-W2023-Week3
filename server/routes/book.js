let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to a schema 
let Book = require('../models/book');

// GET Route for book list page - Read Operation 
router.get('/', (req, res, next) => {
    Book.find((err, booklist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);
            res.render('book', {title: 'Book List', BookList: booklist})
        }
    })
});


module.exports = router;
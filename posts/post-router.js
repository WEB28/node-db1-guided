const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    // select * from posts; --> SQL
    db.select('*').from('posts')
        .then(posts => {
            res.status(200).json({ data: posts })
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ error: error.message});
        })
});

router.get('/:id', (req, res) => {
    // read http://knexjs.org/#Builder-where
    db('posts').where()
        .then(posts => {
            res.status(200).json({ data: posts })
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ error: error.message});
        })
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {
    // read the documentation for deleting records in http://knexjs.org
    // and use the information to implement the delete endpoint
});

module.exports = router;
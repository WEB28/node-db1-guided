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
    db('posts')
        .where({ id: req.params.id })
        // option 2 --> column --> oprator --> id
        // .where( 'id', '=', req.params.id )
        .first()
        .then(posts => {
            res.status(200).json({ data: posts })
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ error: error.message});
        })
});

router.post('/', (req, res) => {
    const postData = req.body;
    
    db('posts')
        // second argument of 'id' guarantees that you'll get the id back when using postgres
        .insert(postData, 'id')
        .then(ids => {
            const id = ids[0]
            db('posts')
                .where({ id })
                .first()
                .then( post => {
                    res.status(200).json({ data: post })
                });
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ error: error.message});
        })
});

//PUT vs PATCH
// PUT --> pass the whole object and it overrides what you have on the database
// PATCH --> you have part of the data and you only want to change the title for example
// Most companies use a PUT

router.patch('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    //update posts set titles = 'new title' where id = 5;
    db('posts')
        .where({ id })
        .update(changes)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: 'update successful'})
            } else {
                res.status(404).json({message: 'no posts by that id found'})
            }
        })
});

router.delete('/:id', (req, res) => {
    // read the documentation for deleting records in http://knexjs.org
    // and use the information to implement the delete endpoint
});

module.exports = router;
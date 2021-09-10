const express = require('express');
const Recipe = require('./recipes-model');
const router = express.Router();

// router.get('/', (req, res, next) => {
//     try {
//         res.json('GET all is Working');
//     } catch (err) {
//         next(err);
//     }
// });

router.get('/:id', (req, res, next) => {
    try {
        Recipe.getById(req.body);
        res.json('GET id is Working');
    } catch (err) {
        next(err);
    }
});

// router.post('/', (req, res, next) => {
//     try {
//         res.json('POST is Working');
//     } catch (err) {
//         next(err);
//     }
// });

module.exports = router;
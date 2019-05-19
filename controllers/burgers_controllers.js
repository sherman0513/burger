let express = require('express');
let router = express.Router();

let burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data 
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([
        'name_of_burger'
    ], [
        req.body.name
    ], (result) => {
        res.json({id: result.insertId });
    });
});

// router.put('/api/burgers/:id', (req, res) => {
//     let condition = 'id = ' + req.params.id;
//     console.log('condition', condition);
//     burger.update({

//     });
// });

module.exports = router;
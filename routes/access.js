const router = require('express').Router();
const verify = require('./vtoken');

router.get('/', verify, (req, res) => {
    res.json({
        access: {
            title: 'My first post',
            description: 'random data you should not access'
        }
    });
});

module.exports = router;
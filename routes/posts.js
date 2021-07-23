const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');
const app = express();
const verify = require('../vtoken');

//GET
router.get('/',verify,async(req, res) => {
    const x = await Post.find();
    res.json(x);
});
app.use(express.json());

//POST
router.post('/create', verify, (req, res) => {
    const post = new Post({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        phone_numbers: req.body.phone_numbers
    });
    post.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});

//Get  specific Contacts
router.get('/get/:id', async (req,res) =>{
    const q = await Post.findById({_id: req.params.id});
    res.json(q);
});

//Delete Contacts 
router.delete('/delete/:id', verify, async (req,res) => {
    const result = await Post.findByIdAndDelete({_id: req.params.id});
    res.json(result);
});

//Update a Contacts
router.patch('/update/:id', verify, async (req, res) => {
    const patch = await Post.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(patch);
});

module.exports =router;
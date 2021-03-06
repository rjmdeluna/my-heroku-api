const jwt = require('jsonwebtoken');

 module.exports = function(req,res,next){
    const token = req.header('AUTHENTICATE');
    if(!token) return res.status(401).send('ACCESS DENIED');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch(err){
        res.status(401).send('INVALID TOKEN');
    }
}
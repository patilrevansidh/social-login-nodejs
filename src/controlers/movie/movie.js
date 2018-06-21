const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send("get all movies")
})


router.get('/movieId',(req,res)=>{
    res.send("get all movies")
})

router.put('/bookmark/movieId',(req,res)=>{
    res.send("bookmark on movie")
})

router.put('/favorite/movieId',(req,res)=>{
    res.send("favorite movie")
})

module.exports = router;

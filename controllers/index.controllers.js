const router = require("express").Router()
const Exersice = require("../models/Exersice.js") 
const Workouts = require("../models/Workouts.js")
const information = require("../models/information.js") 

router.get('/',(req,res)=>{
    res.render('homepage.ejs')
})
module.exports = router;

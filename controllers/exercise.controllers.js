const router = require("express").Router();
const Exercise = require("../models/Exercise.js");


// GET add exercise page

router.get("/:workoutId/new", (req,res)=>{

    res.render("exercises/new.ejs",{
        workoutId:req.params.workoutId
    })

})

// POST create exercise

router.post("/:workoutId", async(req,res)=>{

    try { req.body.workout = req.params.workoutId
        await Exercise.create(req.body)
        res.redirect(`/workouts/${req.params.workoutId}`);

    } catch(error){

        console.log(error)
        res.send("Error creating exercise")
    }
})


module.exports = router
const router = require("express").Router();
const Exercise = require("../models/Exercise.js");


// GET add exercise page

router.get("/:workoutId/new", (req,res)=>{

    res.render("exercises/new.ejs",{
        workoutId:req.params.workoutId
    })

})
// GET edit exercise page
router.get("/:id/edit", async (req, res) => {

    try { const exercise = await Exercise.findById(req.params.id)
        if (!exercise) {
            return res.send("Exercise not found");
        }
        res.render("exercises/edit.ejs", {
            exercise
        })

    } catch (error) {
        console.log(error);
        res.send("Unable to load exercise")
    }
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

// PUT update exercise
router.put("/:id", async (req, res) => {

    try { 
        const exercise = await Exercise.findByIdAndUpdate( req.params.id, req.body, { new: true }
        )
        res.redirect(`/workouts/${exercise.workout}`)
    } catch (error) {
        console.log(error);
        res.send("Unable to update exercise")
    }
})

// DELETE exercise
router.delete("/:id", async (req, res) => {

    try {  const exercise = await Exercise.findById(req.params.id)

        if (!exercise) {
            return res.send("Exercise not found")
        }
        const workoutId = exercise.workout
        await Exercise.findByIdAndDelete(req.params.id)
        res.redirect(`/workouts/${workoutId}`)

    } catch (error) {

        console.log(error)
        res.send("Unable to delete exercise")

    }

})

module.exports = router
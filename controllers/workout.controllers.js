const router = require("express").Router();
const Workout = require("../models/Workouts.js");
const isSignedIn = require("../middleware/is-signed-in.js");



// GET - All Workouts

router.get("/", isSignedIn, async (req, res) => {
    try { const workouts = await Workout.find({ user: req.session.user._id })
        res.render("workouts/index.ejs", { workouts })

    } catch (error) {

        console.log(error);
        res.send("Error loading workouts.")
    }
})



// GET - New Workout Form

router.get("/new", isSignedIn, (req, res) => {
    res.render("workouts/new.ejs")
})



// POST - Create Workout

router.post("/", isSignedIn, async (req, res) => {

    try { req.body.user = req.session.user._id
    await Workout.create(req.body)
        res.redirect("/workouts")

    } catch (error) {

        console.log(error);
        res.send("Unable to create workout.")

    }
})



// GET - Show One Workout

router.get("/:id", isSignedIn, async (req, res) => {
    try {
        console.log("ID from URL:", req.params.id);
        const workout = await Workout.findById(req.params.id);
        console.log("Workout found:", workout);

        if (!workout) {
            return res.send("No workout found with this ID");
        }
        res.render("workouts/show.ejs", {
            workout
        });

    } catch (error) {
        console.log(error);
        res.send("Error finding workout");
    }
})



// GET - Edit Workout Form

router.get("/:id/edit", isSignedIn, async (req, res) => {

    try {
        const workout = await Workout.findOne({
            _id: req.params.id,
            user: req.session.user._id })
        if (!workout) {
            return res.send("Workout not found")
        }
        res.render("workouts/edit.ejs", {
            workout
        })
    } catch (error) {
        console.log(error)
        res.send("Cannot edit workout.")
    }
})

// PUT - Update Workout

router.put("/:id", isSignedIn, async (req, res) => {

    try {
        await Workout.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.redirect(`/workouts/${req.params.id}`)

    } catch (error) {
        console.log(error)
        res.send("Unable to update workout.")
    }
}) 


// DELETE - Delete Workout

router.delete("/:id", isSignedIn, async (req, res) => {
    try {
        await Workout.findOneAndDelete({
    _id: req.params.id,
    user: req.session.user._id
}) 

        res.redirect("/workouts")
    } catch (error) {
        console.log(error)
        res.send("Unable to delete workout.")
    }
})


module.exports = router 
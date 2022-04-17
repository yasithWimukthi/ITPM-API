const router = require("express").Router();
const ClassSchedule = require("../models/classSchedule")

//router for add an employee
router.post("/classSchedule", async (req, res) => {

    const className = req.body.className;
    const staffName = req.body.staffName;
    const location = req.body.location;
    const fee = req.body.fee;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;

    const newClassSchedule = new ClassSchedule({
        className,
        staffName,
        location,
        fee,
        startTime,
        endTime,
    })



    try {
        let response = await newClassSchedule.save();
        if (response)
            return res.status(201).send({ message: "new Class Schedule Added" });
    } catch (err) {
        console.log("error while saving");
        return res.status(500).send({ status: "Internal Server Error" });
    }
});

module.exports = router;
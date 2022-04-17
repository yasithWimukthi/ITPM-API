const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const StaffModel = require("./models/staffmember");
require('dotenv').config()

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
});

//Insert Data
app.get("/staffmember", async (req, res) => {
    const member = new StaffModel({
        fullName: "Sri Vira",
        gender: "male",
        birthDay: '1997/10/02',
        roleid: 1,
        address: "No 480/2,Puhulyaya,Mahiyanganaya",
        mobile: 767592100,
        email: "msriv1997@gmail.com",
        image: "urldfd",
    });
    try {
        await member.save();
        res.send("inserted data");
    } catch (error) {
        console.log(error);
    }

});

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));

const classScheduleRoutes = require('./controller/classScheduleController')
app.use("/api", classScheduleRoutes);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/mycourse")
.then(() => {
    console.log("Database Connection Established Successfully.......................");
})
.catch(err => console.log(err));

// Import model (ONLY ONCE)
const MyCourse = require("./model/CourseModel");

// ================= ROUTES =================

// GET all courses
app.get("/api/courses", async (req, res) => {
    try {
        const courses = await MyCourse.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET course by ID
app.get("/api/courses/:id", async (req, res) => {
    try { 
        const course = await MyCourse.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course Not Found" });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create course
app.post("/api/courses", async (req, res) => {
    try {
        const { title, duration } = req.body;
        const course = new MyCourse({ title, duration });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT update course
app.put("/api/courses/:id", async (req, res) => {
    try {
        const { title, duration } = req.body;
        const updatedCourse = await MyCourse.findByIdAndUpdate(
            req.params.id,
            { title, duration },
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({ message: "Course Not Found" });
        }
        res.json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE course
app.delete("/api/courses/:id", async (req, res) => {
    try {
        const course = await MyCourse.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course Not Found" });
        }
        res.json({ message: "Course Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Server start
app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);


const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Anuoluwapo", course: "Computer Science" },
    { id: 2, name: "Dupe", course: "Software Engineering" }
];

app.get("/", (req, res) => {
    res.send("Welcome to my Student API")
});

app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});

app.get("/api/students/:id", (req,res) => {
    const student = students.find((s) => s.id === Number(req.params.id));


if (!student) {
    return res.status(404).json({
        message: "Student not found"
    });
}
    res.status(200).json(student);
});

app.post("/api/student", (req, res) => {
    const { name, course } = req.body;

    if (!name || !course ) {
        return res.status(400).json({
            message: "Name and course are required"
        });
    }

    const newStudent = {
        id: Date.now(),
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added sucessfully",
        student: newStudent
    });
});

app.delete("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const studentExists = students.some(
        (s) => s.id === id
    );

    if (!studentExists) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    
    students = students.filter((s) => s.id !== id);

    res.status(200).json({
        message: "Student deleted sucessfully"
    });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let feedbacks = [];
let nextId = 1;

/* HOME PAGE */
app.get("/", (req, res) => {
    res.send(`
        <h2>Customer Feedback Form</h2>

        <form action="/feedback" method="POST">
            <input type="text" name="name" placeholder="Enter Name" required>
            <br><br>

            <textarea name="message" placeholder="Enter Feedback" required></textarea>
            <br><br>

            <button type="submit">Submit Feedback</button>
        </form>

        <br>
        <a href="/admin">View All Feedback</a>
    `);
});

/* CREATE - POST */
app.post("/feedback", (req, res) => {
    const { name, message } = req.body;

    const feedback = {
        id: nextId++,
        name,
        message
    };

    feedbacks.push(feedback);

    res.send("Feedback Submitted Successfully! <br><a href='/admin'>View Feedback</a>");
});


/* READ - GET */
app.get("/admin", (req, res) => {
    res.json(feedbacks);
});

/* UPDATE - PUT */
app.put("/feedback/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const feedback = feedbacks.find(f => f.id === id);

    if (!feedback) {
        return res.status(404).json({
            message: "Feedback Not Found"
        });
    }

    feedback.name = req.body.name || feedback.name;
    feedback.message = req.body.message || feedback.message;

    res.json({
        message: "Feedback Updated",
        feedback
    });
});

/* DELETE - DELETE */
app.delete("/feedback/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = feedbacks.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Feedback Not Found"
        });
    }

    feedbacks.splice(index, 1);

    res.json({
        message: "Feedback Deleted"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

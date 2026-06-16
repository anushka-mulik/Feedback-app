const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// In-memory storage
let feedbacks = [];
let id = 1;

// 1. Home Page (Form)
app.get("/", (req, res) => {
    res.send(`
        <h2>Customer Feedback Form</h2>

        <form action="/submit" method="POST">
            Name: <input type="text" name="name" required /> <br><br>

            Message: <br>
            <textarea name="message" required></textarea> <br><br>

            <button type="submit">Submit</button>
        </form>

        <br>
        <a href="/admin">Go to Admin Panel</a>
    `);
});

// 2. Submit Feedback
app.post("/submit", (req, res) => {
    const { name, message } = req.body;

    feedbacks.push({
        id: id++,
        name,
        message
    });

    res.redirect("/admin");
});

// 3. Admin Panel (View all feedback)
app.get("/admin", (req, res) => {

    let list = feedbacks.map(f => `
        <li>
            <b>${f.name}</b>: ${f.message}
            <a href="/edit/${f.id}">Edit</a>
            <a href="/delete/${f.id}">Delete</a>
        </li>
    `).join("");

    res.send(`
        <h2>Admin Panel</h2>

        <a href="/">Go to Form</a>

        <ul>
            ${list}
        </ul>
    `);
});

// 4. Delete Feedback
app.get("/delete/:id", (req, res) => {
    const fid = parseInt(req.params.id);
    feedbacks = feedbacks.filter(f => f.id !== fid);

    res.redirect("/admin");
});

// 5. Edit Page
app.get("/edit/:id", (req, res) => {
    const fid = parseInt(req.params.id);
    const fb = feedbacks.find(f => f.id === fid);

    res.send(`
        <h2>Edit Feedback</h2>

        <form action="/update/${fb.id}" method="POST">
            Name:
            <input type="text" name="name" value="${fb.name}" required />

            <br><br>

            Message:
            <textarea name="message" required>${fb.message}</textarea>

            <br><br>

            <button type="submit">Update</button>
        </form>
    `);
});

// 6. Update Feedback
app.post("/update/:id", (req, res) => {
    const fid = parseInt(req.params.id);
    const { name, message } = req.body;

    feedbacks = feedbacks.map(f => {
        if (f.id === fid) {
            return { id: fid, name, message };
        }
        return f;
    });

    res.redirect("/admin");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
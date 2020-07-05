const connectDB = require("./config/db");
connectDB();
const express = require("express");
const app = express();

//init middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world"));

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT} `));

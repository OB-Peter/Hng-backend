import express from "express";
import fetch from "node-fetch";
import me from "./controller.js";

const app = express();

app.get("/me", me );
app.get("/", (req, res) => res.send("Welcome to the Cat Facts API!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import {
    addFormRoute,
    editFormRoute,
    deleteFormRoute,
    getallFormsroute
} from "./routes/formroute.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

// Connecting Mongoose //
mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log("Mongoose is connected"))
    .catch((err) => console.log(err));

//Setting Routes //
app.use("/addform", addFormRoute)
app.use("/editform", editFormRoute)
app.use("/deleteform",deleteFormRoute)
app.use("/getallforms",getallFormsroute)

//Setting the PORT//
app.listen(PORT, () => console.log("Server started at the port", PORT))

app.get("/", (req, res) => {
    res.send("This backend has been developed to create a form and perform all CRUD operations")
});


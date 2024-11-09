import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const uri = process.env.API_KEY;


const connectDatabase = () => {
    try {
        mongoose.connect(uri).then(() => {
            console.log("Connected to database successfully");
        });
    } catch (error) {
        console.log("Error while connecting to the database: ", error);
    }
};

const schema = mongoose.Schema({
    name: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    statement: { type: String },
});

const Application = mongoose.model("Application", schema);

app.get('/', (req, res) => {
    res.send("hello world!").status(200);
});

app.post('/apply', async (req, res) => {
    try {
        const { name, phoneNumber, email, statement } = req.body;
        const applicant = await Application.create({ name, phoneNumber, email, statement });
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: 'Failed to submit application' });
    }
});

app.listen(PORT, () => {
    connectDatabase();
    console.log(`Server running at port ${PORT}`);
});

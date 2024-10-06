import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'


dotenv.config();

const app = express();
const port = process.env.PORT
// Middleware setup
// app.use(express.json({ limit: '10mb' })); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Parse cookies
app.use(cors());
app.use(bodyParser.json());
const apiVersion = process.env.API_VERSION

app.use(`/api/${apiVersion}/users`, userRoutes);
app.listen(port, async () => {
    try {
        //  initiate the  connection to the DB
        await connectDb();
        console.log("Database connection successful");
    } catch (error) {
        console.error("Database connection error", error);
        process.exit(1);
    }
    console.log(`Server running on port ${port}`)
}) 

// Define a route for the root URL '/'
app.get('/', (req, res) => res.send('Server is ready'));

import mongoose from 'mongoose';
import dotenv from 'dotenv';
// connect to the db database

dotenv.config()
const connectDb = async () => {
    try {
        console.log(process.env.MONGO_URI)
        // Attemot to establish a connection to the MongoDB database using the provided URI
        const conn = await mongoose.connect(process.env.MONGO_URI);
         
        // Log a successful database connection message.
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        // Handle database connection errors.
        console.error(`Error: ${error.message}`);
        process.exit(1); // Terminate the application process in case of a database connection error.
    }
}

export default connectDb;
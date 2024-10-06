import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the module schema using Mongoose.
const moduleSchema = mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'Course', // Reference to Course Model
    },
    title: {
      type: String,
      maxlength: 255,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
      video_url: {
      type: String,  // Path or URL to the video
    },
      position: {
      type: mongoose.Schema.Types.Number,
    },
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Create the Module model using the user schema.
const Module = mongoose.model('Module', moduleSchema);

export default Module;
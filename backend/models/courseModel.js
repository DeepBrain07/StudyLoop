import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the course schema using Mongoose.
const courseSchema = mongoose.Schema(
  {
    instructor_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'User', // Reference to users who upvoted the blog comment
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
    category: {
      type: String,
      maxlength: 255,
      required: true,
    },
    difficulty_level: {
        type: String,
        maxlength: 255,
        required: true,
    },
    thumbnail_image: {
      type: String,  // Path or URL to the profile picture
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0,
      required: true
    },
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Create the Course model using the user schema.
const Course = mongoose.model('Course', courseSchema);

export default Course;
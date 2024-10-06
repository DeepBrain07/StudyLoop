import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the progress schema using Mongoose.
const courseSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'User', // Reference to users who upvoted the blog comment
    },
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'Course', // Reference to Course Model
    },
    module_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'Module', // Reference to Module Model
    },
    completed: {
      type: mongoose.Schema.Types.Boolean,
    },
    score: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    progress: {
      type: mongoose.Schema.Types.Decimal128,
    },
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Create the Progress model using the user schema.
const Progress = mongoose.model('Progress', progressSchema);

export default Progress;
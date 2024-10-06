import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the quiz schema using Mongoose.
const quizSchema = mongoose.Schema(
  {
    module_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'Module', // Reference to Module Model
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
    total_score: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Create the Quiz model using the user schema.
const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
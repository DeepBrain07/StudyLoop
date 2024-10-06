import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the question schema using Mongoose.
const questionSchema = mongoose.Schema(
  {
    quiz_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'Quiz', // Reference to Quiz Model
    },
    question_text: {
      type: String, // The quiz question
      required: true,
      unique: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Create the Question model using the user schema.
const Question = mongoose.model('Question', questionSchema);

export default Question;
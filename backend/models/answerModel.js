import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the answer schema using Mongoose.
const answerSchema = mongoose.Schema(
  {
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'Question', // Reference to Question Model
    },
    is_correct: {
      type: mongoose.Schema.Types.Boolean,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Create the Answer model using the user schema.
const Answer = mongoose.model('Answer', answerSchema);

export default Answer;
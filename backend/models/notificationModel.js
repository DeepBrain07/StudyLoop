import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the notification schema using Mongoose.
const notificationSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
		  ref: 'User', // Reference to users who upvoted the blog comment
    },
    message: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    is_read: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    }
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Create the Notification model using the user schema.
const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
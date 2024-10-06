import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the user schema using Mongoose.
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String, // Path or URL to the profile picture
    },
    bio: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    role: {
      type: String,
      enum: ['user', 'instructor', 'admin'],
      default: 'user', // Default role is 'user'
    },
  },
  {
    timestamps: true, // Automatically generate createdAt and updatedAt timestamps
  }
);

// Middleware to hash the password before saving it to the database.
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare an entered password with the stored hashed password.
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

// Create the User model using the user schema.
const User = mongoose.model('User', userSchema);

export default User;
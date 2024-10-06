import express from "express";
import { 
    registerUser,
    authUser,    
    logoutUser
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

// Create an instance of an Express Router to define routes.
const router = express.Router();

// GET signup route
router.get('/signup', registerUser) 

// POST signup route
router.post('/signup', registerUser)

// GET login route
router.get('/login', authUser)

// POST login route
router.post('/login', authUser)

// POST logout route
router.post('/logout', logoutUser)

// GET home route
router.get('/home', protect, (req, res) => {
    res.status(200).json({'message': 'user logged in'});
})

export default router;
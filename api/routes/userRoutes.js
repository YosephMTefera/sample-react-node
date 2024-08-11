import express from 'express';
import { createUser, getAllUsers } from '../controller/userController.js';
const router = express.Router();

router.get("/get_users",getAllUsers);
router.post("/create",createUser);


export default router;
import { Router } from "express";
import {
	createUser, 
	getAllUsers, 
	deleteUserWithId 
} from "../controllers/user-controller.ts";

const router = Router();

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.delete("/delete-user/:id", deleteUserWithId);

export default router;
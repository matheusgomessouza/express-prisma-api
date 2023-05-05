import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { findUserByPassword } from "../utils/find-user-by-password.ts";
import { findUserByEmail } from "../utils/find-user-by-email.ts";

const prisma = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const retrievedUsers = await prisma.user.findMany();
	const userValidation = retrievedUsers.find(user => findUserByPassword(password, user.password) || findUserByEmail(email, user.email));

	if (userValidation) {
		res.status(400).json({ message: "This user/password already exists. Please inform other user details for user creation." });
	} else {
		const createdUser = await prisma.user.create({
			data: {
				email,
				password
			}
		});

		res.status(201).json({ user: createdUser, message: "Created successfully." });
		return createdUser;
	}
	
	try {
		await prisma.$disconnect();
	}
	catch(e) {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	}
};

const getAllUsers = async (req?: Request, res?: Response) => {
	const retrievedUsers = await prisma.user.findMany();
	res.status(200).json(retrievedUsers);
};

const deleteUserWithId = async (req: Request, res: Response) => {
	const { id } = req.params;
	const deletedUser = await prisma.user.delete({
		where: {
			id: Number(id)
		},
	});
	res.status(200).json({ user: deletedUser, message: "User deleted with success" });
};

export { 
	createUser,
	getAllUsers,
	deleteUserWithId
};
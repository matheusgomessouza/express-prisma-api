import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import UserCreateController from "./controllers/user-create-controller.ts";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
const port = 8000;

app.get("/", (req: Request, res: Response) => {
	res.send("Service is up and running!");
});

app.get("/get-all-users", async (req: Request, res: Response) => {
	const retrievedUsers = await prisma.user.findMany();
	res.json(retrievedUsers);
});

app.delete("/delete-user/:id", async (req: Request, res: Response) => {
	const { id } = req.params;
	const deletedUser = await prisma.user.delete({
		where: {
			id: Number(id)
		},
	});
	res.json(deletedUser);
});

app.post("/create-user", (req: Request, res: Response) => {
	const { email, password } = req.body;
	const createUser = new UserCreateController(email, password);

	res.json(createUser);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
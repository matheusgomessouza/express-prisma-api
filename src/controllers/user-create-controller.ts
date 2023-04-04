import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserCreateController {
	constructor(email: string, password: string) {}

	private create(email: string, password: string) {
		this.email = email;
		this.password = password;
	}
}

export default UserCreateController;
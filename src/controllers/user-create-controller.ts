import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserCreateController {
	email: string;
	password: string;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
		this.main();
	}

	async create(email: string, password: string) {
		await prisma.user.create({
			data: {
				email,
				password
			}
		});
	}

	async main() {
		this.create(this.email, this.password);

		try {
			await prisma.$disconnect();
		}
		catch(e) {
			console.error(e);
			await prisma.$disconnect();
			process.exit(1);
		}
	}
}

export default UserCreateController;
import { expect, describe, test } from "vitest";
import UserCreateController from "../controllers/user-create-controller.ts";

interface UserProps {
	email: string;
	password: string;
}

describe("UserCreateController", () => {
	const email = "test@example.com";
	const password = "password";

	test("should create an user with the given email and password", () => {
		const returnedUserData = new UserCreateController(email, password);
	
		expect(returnedUserData.email).toBe("test@example.com");
		expect(returnedUserData.password).toBe("password");
	});

	test("should return an object that has email and password properties", () => {
		const userCreatedObject = new UserCreateController(email, password);

		expect(userCreatedObject).toBeTypeOf("object");
		expect(userCreatedObject).toHaveProperty("email");
		expect(userCreatedObject).toHaveProperty("password");
	});
});

import { expect, describe, test } from "vitest";
import { createUser } from "../controllers/user-controller.ts";

interface UserProps {
	email: string;
	password: string;
}

describe("UserCreateController", () => {
	const email = "test@example.com";
	const password = "password";

	test("should create an user with the given email and password", () => {
		const returnedUserData = createUser(email, password);
	
		expect(returnedUserData.email).toBe("test@example.com");
		expect(returnedUserData.password).toBe("password");
	});

	test("should return an object that has email and password properties", () => {
		const userCreatedObject = createUser(email, password);

		expect(userCreatedObject).toBeTypeOf("object");
		expect(userCreatedObject).toHaveProperty("email");
		expect(userCreatedObject).toHaveProperty("password");
	});
});

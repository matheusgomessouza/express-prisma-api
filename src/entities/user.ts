import { randomUUID } from "node:crypto";

export interface User {
  email: string;
  password: string;
}

export class User implements User {
	private email: string;
	private password: string;

	constructor(
		email: string,
		password: string
	) {
		this.email = email;
		this.password = password;
	}
}
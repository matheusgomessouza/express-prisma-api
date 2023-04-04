import { randomUUID } from "node:crypto";

export interface User {
  id: string;
  email: string;
  password: string;
}

export class User implements User {
	private _id: string;
	private email: string;
	private password: string;

	constructor(
		id: string,
		email: string,
		password: string
	) {
		this._id = id ?? randomUUID();
		this.email = email;
		this.password = password;
	}
}
export function findUserByEmail(email: string, databaseEmail: string) {
	return email === databaseEmail;
}
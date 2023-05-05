export function findUserByPassword(password: string, databasePassword: string) {
	return password === databasePassword;
}
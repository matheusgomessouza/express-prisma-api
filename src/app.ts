import express from "express";
import userMiddleware from "./routes/user.ts";

const app = express();

app.use(express.json());
app.use("/api/user", userMiddleware);

const port = 8000;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const cors = require("cors");

const connectDB = async () => {
	try {
		await mongoose.connect(
			// `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@productivity-app.pa7bz.mongodb.net/MernStackDatabase?retryWrites=true&w=majority`,
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@productivity-app.pa7bz.mongodb.net/?retryWrites=true&w=majority`,
			// await mongoose.connect(
			//   `mongodb+srv://kien:1234@productivity-app.pa7bz.mongodb.net/MernStackDatabase?retryWrites=true&w=majority`,
			{
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			}
		);
		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello");
});

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

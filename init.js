import dotenv from "dotenv";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import "./db";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`hello :-) Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

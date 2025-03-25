import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";

const app = express();

app.get('/notes', (req, res) => {
  res.send('Notes endpoint working');
});

app.use(cors());
app.use(express.json());
app.use(NotesRoute);

const PORT = 5000;
app.listen(5000, ()=> console.log('Server up and running'));

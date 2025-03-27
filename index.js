import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";

const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('Notes endpoint working');
});

app.listen(8080, '0.0.0.0', () => {
  console.log('Server running on port 8080');
});

app.use(cors());
app.use(express.json());
app.use(NotesRoute);

const PORT = 5000;
app.listen(5000, ()=> console.log('Server up and running'));

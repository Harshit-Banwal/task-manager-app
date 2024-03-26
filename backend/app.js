const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl, (err) => {
  if (err) throw err;
  console.log('Mongodb connected...');
});

app.get('/', (req, res) => {
  res.status(201).send('Hello From backend..');
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/profile', profileRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is lstening on http://localhost:${port}`);
});

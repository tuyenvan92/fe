const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// env
const PORT = 3005;

app.use(cors());

// connect DB
mongoose.connect(
  'mongodb+srv://nhattruongniit:truong123@cluster0.xga7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  () => {
    console.log('connect to DB')
  }
)

// routes
const userRoute = require('./routes/userRoute');

app.use(express.json({ extend: true }));
app.get('/', (_, res) => res.send('API running'));

// route
app.use('/api/user', userRoute)

app.listen(PORT, () => {
  console.log(`Server Up and running localhost:${PORT}`);
});
const express = require('express');
const app = express();
const PORT = 3005;

// routes
const userRoute = require('./routes/userRoute');

app.use(express.json({ extend: true }));
app.get('/', (_, res) => res.send('API running'));

// route
app.use('/api/user', userRoute)

app.listen(PORT, () => {
  console.log(`Server Up and running localhost:${PORT}`);
});
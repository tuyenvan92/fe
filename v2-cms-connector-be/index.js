const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')

const userRoute = require('./routes/userRoute')
dotenv.config()
app.use(cors());

mongoose.connect( 
    'mongodb+srv://tuyen123:tuyen123@cluster0.ulyyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    () => {
        console.log('connect to DB')
    }
)
const PORT = process.env.PORT || 3005

app.use(express.json({ extend:true}));
app.get('/', (_,res) => res.send('API running'));

app.use('/api/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server up and running localhost: ${PORT}`)
});

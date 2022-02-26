const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')

const mongo = require('./mongo');

const userRoute = require('./routes/userRoute')
dotenv.config()
app.use(cors());

mongoose.connect(`mongodb+srv://tuyenvan:tuyen123@cluster0.gtqk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected!!');
    
const PORT = process.env.PORT || 3005

mongo().then(() => {

    app.use(express.json({ extend:true}));
    app.get('/', (_,res) => res.send('API running'));
    
    app.use('/api/user', userRoute)
    
    app.listen(PORT, () => {
        console.log(`Server up and running localhost: ${PORT}`)
    });
})



const express=require('express');
const cors=require('cors');


const app=express();
const port= process.env.PORT ||3000;

const userRouters = require('./routers/userRouters');
app.use('/api/users', userRouters);


const mongoose=require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
   .then(() => console.log("mongodb connected"))
   .catch(err => console.log(err));



app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {

    res.send('Jamshidbek');
});


app.listen(port, () => console.log(`sever running 3000 port ${port}`));
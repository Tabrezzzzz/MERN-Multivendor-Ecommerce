const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
const connectDb = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MogoDB is Connected`)
    } catch (error){
        console.log(`Error : ${error}`);
        process.exit(1);
    }
}

connectDb()
// Middleweare
app.use(cors());
app.use(express.json());

app.use("/api/customer", require('./Routes/customerRoutes'))

app.listen(8080, () => {
    console.log(`Server running on ${8080}`);
  });
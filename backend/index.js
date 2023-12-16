const express = require("express");
const app = express();
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')
// const cookieParser = require('cookie-parser')

app.use(express.json());
// app.use(cookieParser())

app.use('/api/v1', require('./routes/index'))

dotenv.config({ path: "backend/config/config.env" })
connectDatabase()


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
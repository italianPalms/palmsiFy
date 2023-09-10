const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

const corsOption = {
    origin: '*', 
    credentials: true, 
    optionSuccessStatus: 200
}

app.use(cors(corsOption))
app.use('/', router)

const dbOption = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.MONGO_URI, dbOption)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err)) 

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
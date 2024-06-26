const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const mongoose = require('mongoose');
require('dotenv/config');
const cookieParser = require('cookie-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: '*', 
    credentials: true, 
    optionSuccessStatus: 200
}

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
}));

app.use(cors(corsOption))
app.use('/', router)

const dbOption = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.MONGO_URI, dbOption)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err)) 

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require ('mongoose')


//Config .env to ./config/config.env
require('dotenv').config({
    path:'./config/config.env'
})

//Connect to Database
const uri = process.env.MONGO_URI
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
    }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log ("MongoDB database connection established successfully");
})

//Use bodyParser
app.use(bodyparser.json())

//Load all routes
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')

//config for only development
if(process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
    //Morgan give information about each request
    //Cors it's allow to deal with react for localhost at port 3000 without any problem
}
//Use Routes
app.use('/api/',authRouter);
app.use('/api', userRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page not found"
    })
});
const PORT = process.env.PORT

var listener = app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`); //Listening on port 8888
});
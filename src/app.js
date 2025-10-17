const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('./routes/users');
const errorHandler = require('./middlewares/errorHandler');


const app = express();


app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



app.use('/api/users', usersRouter);


// error handler terakhir
app.use(errorHandler);


module.exports = app;
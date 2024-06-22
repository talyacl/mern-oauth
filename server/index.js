const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        console.error(err.stack);
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);


app.use('/auth', require('./routes/auth'));

app.get('/dashboard', (req, res) => {
    res.send('<h1>Welcome to the dashboard</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

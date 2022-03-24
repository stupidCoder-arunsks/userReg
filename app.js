// using express we are creating the server
const express = require('express');
const app = express();
const cors = require('cors');

const sequelize = require('./util/database');
const userRoutes = require('./routes/routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json()) 
app.use(cors());

app.use('/user',userRoutes);

sequelize.sync().then(result => {
    // console.log(result);
    app.listen(3000);
}).catch(err => {
    console.log(err);
});



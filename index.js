const { Router } = require('express');
const express = require('express');
const mongoose =require('mongoose');
const route = require('./route/routers')
const user = require('./model/user')
const bodyParser = require('body-parser')
const cors = require('cors')

const app =  express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',route);

const URL = 'mongodb+srv://krunalprajapati1234:krunal0997@cluster0.c9t3e.mongodb.net/CRUDAPP?retryWrites=true&w=majority'
mongoose.connect(URL)



app.listen(7001,function(){
    console.log('port is Run')
})


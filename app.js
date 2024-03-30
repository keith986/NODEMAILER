const express = require('express');
const nodemailer = require('nodemailer');
const morgan = require('morgan');


const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(6060, () => {
    console.log('Listening to port 6060');
});

const transporter  = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user: '',
        pass: ''
    }
});

const mailOptions = {
    to : '',
    from : '',
    subject: '',
    text : '',

    //attach picture or document here
    attachments : {
        filename : '',
        path : ''
    }
};


transporter.sendMail(mailOptions, (error,results) => {
    if (error) throw error;
    console.log('Email sent: ' + results);
});
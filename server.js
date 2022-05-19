require('dotenv').config();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

let codes = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/code', (req, res) => {
  const { email } = req.body;
  const code = getRandomInt(10000, 100000);

  console.log(email, code);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Код подтверждения для авторизации',
    text: `Код: ${code}`
  };

    transporter.sendMail(mailOptions, error => {
      console.log(error);
      return res.status(400).json(error);
    });
    codes.push({email, code});
    console.log(codes)
    return res.status(200).json(true);
});

app.post('/login', (req, res) => {
  const { email, code } = req.body;

  console.log(codes);
  const result = codes.filter(codeObj => (codeObj.email === email && codeObj.code === Number(code)));

  if (result.length === 0) {
    return res.status(404).json('Not found.');
  }
  
  codes.filter(codeObj => codeObj.email !== email)

  return res.status(200).json({token: jwt.sign({email: email}, process.env.SECRET_JWT)});
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

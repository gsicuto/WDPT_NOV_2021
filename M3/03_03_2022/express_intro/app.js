// import express from 'express'

const express = require('express');

const app = express();

app.use(express.static('public'));

// Routes 

// www.fofocas.com/home

app.get('/home', (request, response, next) => {
  console.log(request);
  response.send(`<h1> Olá Fofoqueiras </h1>`)
});

app.get('/cat', (req, res) => {
  res.sendFile(`${__dirname}/views/cat-page.html`);
});
// www.fofocas.com/about

app.get('/about', () => {});

// www.fofocas.com/search?comida=arroz

app.get('/search', (req, res) => {
  console.log(req.query);
});

app.get('/alunos/:name', (req, res) => {
  // req.method => GET /POST
  // req.path => alunos/Eduardo
  // req.headers =>
  console.log(req.params);
  res.status(200).send(req.params);
});


app.listen(3000, () => console.log('server is running on port 3000'));

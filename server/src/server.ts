import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  console.log('Acessou a rota "users"');
  return response.send('Acessou a rota "users"');
})

app.listen(3333);